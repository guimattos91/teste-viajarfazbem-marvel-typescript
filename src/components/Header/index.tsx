import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Logo from 'assets/icons/logo-marvel.svg'

import NavHeader from 'components/NavHeader'

import { StyleHeader } from './style'

const Header: React.FC = () => {
  return (
    <StyleHeader>
      <Container>
        <Row className="d-flex align-items-center justify-content-between py-3">
          <Col>
            <Link to="/">
              <h1>
                <img src={Logo} alt="logo" height="80" width="auto" />
              </h1>
            </Link>
          </Col>
          <Col className="d-flex justify-content-end">
            <NavHeader />
          </Col>
        </Row>
      </Container>
    </StyleHeader>
  )
}

export default memo(Header)
