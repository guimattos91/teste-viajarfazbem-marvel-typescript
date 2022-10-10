import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Logo from 'assets/marvel-logo.png'

import NavHeader from 'components/NavHeader'

import { StyleHeader } from './style'

const Header: React.FC = () => {
  return (
    <StyleHeader>
      <Container>
        <Row className="d-flex align-items-center justify-content-center py-3">
          <Col>
            <Link to="/">
              <h1 className="d-flex align-items-center justify-content-center">
                <img src={Logo} alt="logo" height="80" width="auto" />
              </h1>
            </Link>
            <div className="pt-3">
              <NavHeader />
            </div>
          </Col>
        </Row>
      </Container>
    </StyleHeader>
  )
}

export default memo(Header)
