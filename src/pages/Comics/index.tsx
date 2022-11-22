import { memo, useCallback, useEffect } from 'react'

import { Breadcrumb, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Jarvis from 'assets/jarvis3.png'

import { useComics } from 'context/ComicsContext'

import ComicsCard from 'components/ComicsCard'
import Footer from 'components/Footer'
import Header from 'components/Header'
import SearchComponent from 'components/SearchComponent'

import useTitle from 'hooks/useTitle'

import { BreadccrumbStyled, MainStyle } from 'styles/Main'
import { Pagination } from 'styles/Pagination'

import { ButtonBack, ColCards, StyledLink, TitleH1 } from './styles'

const Comics: React.FC = () => {
  const { comics, isLoading, totalPages, currentPage, error, fetchComics } =
    useComics()

  useEffect(() => {
    fetchComics(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setTitle = useTitle()
  useEffect(() => setTitle('Comics'))

  const handlePageChange = useCallback(
    (page: number) => fetchComics(page),
    [fetchComics],
  )

  return (
    <>
      <Header />
      <MainStyle>
        <Container>
          <BreadccrumbStyled className="pt-3">
            <Link to="/">Home</Link> <p className="text-white px-2">/</p>
            <Breadcrumb.Item active>Comics</Breadcrumb.Item>
          </BreadccrumbStyled>
          <Row className="pt-4">
            <Col className="d-flex justify-content-center">
              <SearchComponent fetchCategory={fetchComics} />
            </Col>
          </Row>
          <Row>
            <Col>
              <TitleH1 className="p-3">Comics</TitleH1>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center">
            {isLoading && (
              <div className="text-center py-2">
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
                  <ButtonBack className="mb-3" type="button">
                    <StyledLink href="/characters" className="px-4 py-2">
                      Voltar
                    </StyledLink>
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
                  nextClassName={
                    currentPage === Math.ceil(totalPages) ? 'd-none' : undefined
                  }
                  forcePage={currentPage - 1}
                  onPageChange={(p) => handlePageChange(p.selected + 1)}
                  pageCount={totalPages}
                  previousLabel="Previous"
                  previousClassName={currentPage === 1 ? 'd-none' : undefined}
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
