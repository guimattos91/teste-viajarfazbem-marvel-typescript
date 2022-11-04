import { memo, useEffect } from 'react'

import { Breadcrumb, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { useComics } from 'context/ComicsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'

import { getImageUrl } from 'helpers'

import useTitle from 'hooks/useTitle'

import { BreadccrumbStyled } from 'styles/Main'

import { BlurDiv, H1White, MainBlack, PStyled, PStyleLarger } from './styles'

const Comic: React.FC = () => {
  const { comic, isLoading, fetchComic } = useComics()
  const { id } = useParams()

  const setTitle = useTitle()
  useEffect(() => setTitle(`${comic?.title} | Comics`))

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
                <Row className="pt-5 row-cols-1 row-cols-md-2">
                  <Col>
                    <img
                      src={getImageUrl(comic.thumbnail)}
                      alt={comic?.title}
                      className="img-fluid"
                    />
                    <PStyled>ID: {comic.id}</PStyled>
                  </Col>
                  <Col className="col-8">
                    <BreadccrumbStyled>
                      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                      <Breadcrumb.Item href="/comic">Comics</Breadcrumb.Item>
                      <Breadcrumb.Item active>{comic.title}</Breadcrumb.Item>
                    </BreadccrumbStyled>
                    <H1White>{comic?.title ?? 'Loading...'}</H1White>
                    {comic.description && (
                      <PStyleLarger className="pt-5">
                        {comic.description}
                      </PStyleLarger>
                    )}
                    {!comic.description && (
                      <PStyleLarger className="pt-5">
                        Theres is no description for this comic book
                      </PStyleLarger>
                    )}
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
