import { memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

import { useComics } from 'context/ComicsContext'

import ComicsCard from 'components/ComicsCard'
import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { MainStyle } from 'styles/Main'
import { Pagination } from 'styles/Pagination'

import { ButtonStyle, ColCards, InputStyle, TitleH1, TitleH2 } from './styles'

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

  useEffect(() => {
    fetchComics(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <MainStyle>
        <Container>
          <Row className="pt-4">
            <Col className="d-flex justify-content-center">
              <InputStyle
                type="text"
                placeholder="Buscar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ButtonStyle type="button" onClick={handleSearch}>
                <BsSearch color="#fa2d01" />
              </ButtonStyle>
            </Col>
          </Row>
          <Row>
            <Col>
              <TitleH1 className="p-3">Comics</TitleH1>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
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
              <TitleH2>Nenhum resultado encontrado</TitleH2>
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