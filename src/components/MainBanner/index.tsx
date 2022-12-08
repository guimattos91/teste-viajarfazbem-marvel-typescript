import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import BannerImage from 'assets/banner.jpg'

import { StyledDiv } from './styles'

const MainBanner: React.FC = () => {
  return (
    <StyledDiv>
      <img
        src={BannerImage}
        alt="BannerImage"
        style={{ width: `100%`, height: `auto` }}
      />
      <Container>
        <Row>
          <Col xs={12} md={2}>
            <h1>CONHEÇA NOSSOS PERSONAGENS</h1>
          </Col>
          <Col>
            <div />
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  )
}

export default memo(MainBanner)
