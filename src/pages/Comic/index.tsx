import { memo, useEffect } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { useComics } from 'context/ComicsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'

import { getImageUrl } from 'helpers'

import useTitle from 'hooks/useTitle'

import {
  BlurDiv,
  H1White,
  ImgStyled,
  MainBlack,
  PStyled,
  PStyleLarger,
} from './styles'

const Comic: React.FC = () => {
  const { comic, isLoading, fetchComic } = useComics()
  const { id } = useParams()

  const setTitle = useTitle()
  useEffect(() => setTitle(`${comic?.title}`))

  useEffect(() => {
    fetchComic(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header />
      <MainBlack>
        {isLoading && (
          <div className="text-center d-flex justify-content-center">
            <Spinner
              animation="border"
              variant="danger"
              className="d-flex justify-content-center"
            />
          </div>
        )}
        {!isLoading && comic && (
          <div
            style={{
              backgroundImage: `url(${getImageUrl(comic.thumbnail)})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              height: '100vh',
            }}
          >
            <BlurDiv>
              <Container>
                <Row className="pt-5 d-inline-flex justify-content-between">
                  <Col>
                    <ImgStyled
                      src={getImageUrl(comic.thumbnail)}
                      alt={comic?.title}
                    />
                  </Col>
                  <Col className="col-8">
                    <H1White>{comic?.title ?? 'Loading...'}</H1White>
                    <PStyled>ID: {comic.id}</PStyled>
                    <PStyleLarger className="pt-5">
                      {comic.description}
                    </PStyleLarger>
                  </Col>
                </Row>
              </Container>
            </BlurDiv>
          </div>
        )}
      </MainBlack>
      <Footer />
    </>
  )
}

export default memo(Comic)
