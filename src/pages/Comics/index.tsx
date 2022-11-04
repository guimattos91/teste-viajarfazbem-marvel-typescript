import { memo, useCallback, useEffect, useState } from 'react'

import { Breadcrumb, Col, Container, Row, Spinner } from 'react-bootstrap'

import Jarvis from 'assets/jarvis3.png'

import { useComics } from 'context/ComicsContext'

import ComicsCard from 'components/ComicsCard'
import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { BreadccrumbStyled, MainStyle } from 'styles/Main'
import { Pagination } from 'styles/Pagination'

import {
  ButtonBack,
  ButtonStyle,
  ColCards,
  InputStyle,
  StyledP,
  TitleH1,
} from './styles'

const Comics: React.FC = () => {
  const { comics, isLoading, totalPages, currentPage, error, fetchComics } =
    useComics()

  const [search, setSearch] = useState('')

  const setTitle = useTitle()
  useEffect(() => setTitle('Comics'))

  const handlePageChange = useCallback(
    (page: number) => fetchComics(page, search),
    [fetchComics, search],
  )

  const handleSearch = useCallback(
    () => fetchComics(1, search),
    [fetchComics, search],
  )
  const clearSearch = useCallback(() => {
    fetchComics(1)
    setSearch('')
  }, [fetchComics])

  useEffect(() => {
    fetchComics(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <MainStyle>
        <Container>
          <BreadccrumbStyled>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Comics</Breadcrumb.Item>
          </BreadccrumbStyled>
          <Row className="pt-4">
            <Col className="d-flex justify-content-center">
              <InputStyle
                type="text"
                placeholder="Buscar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="my-4 my-md-2">
                <ButtonStyle type="button" onClick={handleSearch}>
                  <p className="m-0 px-2">Buscar</p>
                </ButtonStyle>
                {search.length > 0 && (
                  <ButtonStyle type="button" onClick={clearSearch}>
                    <p className="m-0 px-2">Limpar</p>
                  </ButtonStyle>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <TitleH1 className="p-3">Comics</TitleH1>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center">
            {isLoading && (
              <div className="text-center">
                <Spinner animation="border" variant="danger" />
              </div>
            )}
            {!isLoading &&
              !error &&
              comics.map((comic) => (
                <ColCards
                  className="d-flex justify-content-center"
                  key={comic.id}
                >
                  <ComicsCard comic={comic} />
                </ColCards>
              ))}
            {!isLoading && !error && comics.length === 0 && (
              <>
                <img
                  src={Jarvis}
                  alt="Personagem Não Encontrado"
                  style={{ width: `100%`, height: `auto` }}
                />
                <div className="d-flex flex-column align-items-center justify-content-center py-3">
                  <ButtonBack
                    className="mb-3"
                    type="button"
                    onClick={clearSearch}
                  >
                    <StyledP className="px-4 py-2">Voltar</StyledP>
                  </ButtonBack>
                </div>
              </>
            )}
          </Row>
          <Row>
            <Col>
              {totalPages > 1 && (
                <Pagination
                  className="d-flex justify-content-center px-3 text-decoration-none"
                  nextLabel="Next"
                  forcePage={currentPage - 1}
                  onPageChange={(p) => handlePageChange(p.selected + 1)}
                  pageCount={totalPages}
                  previousLabel="Previous"
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={1}
                />
              )}
            </Col>
          </Row>
        </Container>
      </MainStyle>
      <Footer />
    </>
  )
}

export default memo(Comics)
