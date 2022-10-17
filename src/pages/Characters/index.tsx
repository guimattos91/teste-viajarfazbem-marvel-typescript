import { memo, useCallback, useEffect, useState } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Col, Container, Row, Spinner } from 'react-bootstrap'
// import ReactPaginate from 'react-paginate';

import { BsSearch } from 'react-icons/bs'

import Jarvis from 'assets/jarvis2.png'

import { useCharacters } from 'context/CharactersContext'

import CharacterCard from 'components/CharacterCard'
import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { MainStyle } from 'styles/Main'
import { Pagination } from 'styles/Pagination'

import { ThumbnailType } from 'types/CharacterType'

import {
  ButtonBack,
  ButtonStyle,
  ColCards,
  InputStyle,
  StyledP,
  TitleH1,
} from './styles'

const CharactersPage: React.FC = () => {
  const {
    characters,
    isLoading,
    totalPages,
    currentPage,
    error,
    fetchCharacters,
  } = useCharacters()
  const [search, setSearch] = useState('')

  const handlePageChange = useCallback(
    (page: number) => fetchCharacters(page),
    [fetchCharacters],
  )

  const handleSearch = useCallback(
    () => fetchCharacters(1, search),
    [fetchCharacters, search],
  )

  const clearSearch = useCallback(() => fetchCharacters(1), [fetchCharacters])

  const setTitle = useTitle()
  useEffect(() => setTitle('Characters'))

  useEffect(() => {
    fetchCharacters(1)
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
              <TitleH1 className="p-3">Characters</TitleH1>
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
              characters.map(
                (character: {
                  id: number
                  name: string
                  thumbnail: ThumbnailType
                  description: string
                }) => (
                  <ColCards key={character.id} className="d-flex">
                    <CharacterCard character={character} />
                  </ColCards>
                ),
              )}
            {!isLoading && !error && characters.length === 0 && (
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

export default memo(CharactersPage)
