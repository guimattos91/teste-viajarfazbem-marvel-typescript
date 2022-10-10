import { memo, useEffect } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { useCharacters } from 'context/CharactersContext'

import Footer from 'components/Footer'
import Header from 'components/Header'

import { getImageUrl } from 'helpers'

import useTitle from 'hooks/useTitle'

import { MainStyle } from 'styles/Main'

import { BlurDiv, H1White, H2White, PWhite } from './styles'

const Character: React.FC = () => {
  const { character, isLoading, error, fetchCharacter } = useCharacters()
  const { id } = useParams()

  const setTitle = useTitle()
  useEffect(() => setTitle(`${character?.name}`))

  useEffect(() => {
    if (id) fetchCharacter(id)
  }, [fetchCharacter, id])
  return (
    <>
      <Header />
      <MainStyle>
        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
        {!isLoading && !error && character && (
          <>
            <div
              style={{
                backgroundImage: `url(${getImageUrl(character.thumbnail)})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                height: '50vh',
              }}
            >
              <BlurDiv className="d-flex align-items-end">
                <Container>
                  <Row className="row-cols-1 row-cols-md-2">
                    <Col>
                      <H1White className="d-flex align-self-center">
                        {character?.name ?? 'Loading...'}
                      </H1White>
                      <PWhite>{character.description}</PWhite>
                    </Col>
                  </Row>
                </Container>
              </BlurDiv>
            </div>
            <Container>
              <Row className="pt-5">
                <Col>
                  <H2White className=" pt-5 d-flex justify-content-center text-align-center">
                    Checkout Our Next Movie
                  </H2White>
                  <PWhite className="d-flex justify-content-center text-align-center">
                    Soon in the theaters
                  </PWhite>
                  <div className="pb-5 pt-2 d-flex justify-content-center">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/RlOB3UALvrQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </MainStyle>
      <Footer />
    </>
  )
}

export default memo(Character)
