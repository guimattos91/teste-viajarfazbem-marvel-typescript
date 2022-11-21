import { memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import BannerImage from 'assets/Banner.jpeg'
import CharactersBanner from 'assets/characters.png'
import ComicBanner from 'assets/comics.png'

import CharacterCard from 'components/CharacterCard'
import Footer from 'components/Footer'
import Header from 'components/Header'

import Api from 'services/Api'

import { MainStyle } from 'styles/Main'

import { CharacterType } from 'types/CharacterType'

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchCharacters = useCallback(async () => {
    try {
      const {
        data: {
          data: { results },
        },
      } = await Api.get('/characters')
      setCharacters(results)
    } catch {
      ;<p>x</p>
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCharacters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <MainStyle>
        <img
          src={BannerImage}
          alt="BannerImage"
          style={{ width: `100%`, height: `auto` }}
        />
        <Container>
          <Row>
            <Col>
              <Link to="/characters">
                <img
                  src={CharactersBanner}
                  alt="CharactersBanner"
                  style={{ width: `100%`, height: `auto` }}
                />
              </Link>
              <Link to="/comics">
                <img
                  className="pt-3"
                  src={ComicBanner}
                  alt="ComicBanner"
                  style={{ width: `100%`, height: `auto` }}
                />
              </Link>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            {isLoading && (
              <div className="text-center d-flex py-4 justify-content-center">
                <Spinner animation="border" variant="danger" />
              </div>
            )}
            {!isLoading &&
              characters.map((character) => (
                <Col key={character.id} className="d-flex">
                  <CharacterCard character={character} />
                </Col>
              ))}
            {/* {!isLoading &&
              characters.map((character) => (
                <Col key={character.id} className="d-flex">
                  <CharacterCard character={character} />
                </Col>
              ))} */}
          </Row>
        </Container>
      </MainStyle>
      <Footer />
    </>
  )
}

export default memo(Home)
