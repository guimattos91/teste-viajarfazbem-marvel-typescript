import { memo, useCallback, useEffect } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import Jarvis from 'assets/jarvis2.png'

import { useCharacters } from 'context/CharactersContext'

import CharacterCard from 'components/CharacterCard'
import FavoriteCharacters from 'components/FavoriteCharacters'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MainBanner from 'components/MainBanner'
import MainTitles from 'components/MainTitles'
import MarvelMastercard from 'components/MarvelMastercard'
import NewsAndEmail from 'components/NewsAndEmail'
import SearchComponent from 'components/SearchComponent'

import { MainStyle } from 'styles/Main'
import { Pagination } from 'styles/Pagination'

const Home: React.FC = () => {
  const {
    characters,
    error,
    isLoading,
    totalPages,
    currentPage,
    fetchCharacters,
  } = useCharacters()

  const handlePageChange = useCallback(
    (page: number) => fetchCharacters(page),
    [fetchCharacters],
  )

  useEffect(() => {
    fetchCharacters(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <MainStyle>
        <MainBanner />
        <FavoriteCharacters />
        <Container>
          <MainTitles title="LISTA DE PERSONAGENS DA MARVEL" color="black" />
          <SearchComponent fetchCategory={fetchCharacters} />
          <Row className="row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
            {isLoading && (
              <div className="text-center">
                <Spinner animation="border" variant="success" />
              </div>
            )}
            {!isLoading &&
              characters.map((character) => (
                <Col key={character.id} className="d-flex py-4">
                  <CharacterCard character={character} />
                </Col>
              ))}
            {!isLoading && !error && characters.length === 0 && (
              <img
                src={Jarvis}
                alt="Personagem Não Encontrado"
                style={{ width: `100%`, height: `auto` }}
              />
            )}
          </Row>
          <Row>
            <Col>
              {totalPages > 1 && (
                <Pagination
                  className="d-flex justify-content-center px-3 text-decoration-none"
                  nextLabel={null}
                  forcePage={currentPage - 1}
                  onPageChange={(p) => handlePageChange(p.selected + 1)}
                  pageCount={totalPages}
                  previousLabel={null}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={1}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <MarvelMastercard />
            </Col>
          </Row>
        </Container>
        <NewsAndEmail />
      </MainStyle>
      <Footer />
    </>
  )
}

export default memo(Home)
