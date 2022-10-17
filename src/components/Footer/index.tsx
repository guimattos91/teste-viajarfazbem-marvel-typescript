import { memo } from 'react'

import { Container, Row } from 'react-bootstrap'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import Logo from 'assets/marvel-logo.png'

import {
  Buttonmail,
  ColCards,
  EmailDiv,
  InputEmail,
  StyleFooter,
} from './styles'

const Footer: React.FC = () => {
  return (
    <StyleFooter className="py-5">
      <Container>
        <Row className="row-cols-1 row-cols-md-3 row-cols-lg-4">
          <ColCards>
            <div className="d-flex justify-content-center">
              <Link to="/">
                <img src={Logo} alt="logo" height="100" width="auto" />
              </Link>
            </div>
          </ColCards>
          <ColCards>
            <nav className="py-3">
              <div className="d-flex justify-content-center">
                <Link
                  to="/characters"
                  className="text-decoration-none text-reset"
                >
                  Characters
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/comics" className="text-decoration-none text-reset">
                  Comics
                </Link>
              </div>
            </nav>
          </ColCards>
          <ColCards>
            <nav className="py-3 g-3">
              <h5 className="d-flex justify-content-center">Follow Us:</h5>
              <div className="d-flex justify-content-center">
                <a href="https://www.instagram.com/marvel/" className="px-2">
                  <BsInstagram color="white" />
                </a>
                <a href="https://www.facebook.com/Marvel/" className="px-2">
                  <BsFacebook color="white" />
                </a>
                <a href="https://twitter.com/marvel" className="px-2">
                  <BsTwitter color="white" />
                </a>
              </div>
            </nav>
          </ColCards>
          <ColCards className="col-12 p-3">
            <h4 className="d-flex justify-content-center">Subscribe now</h4>
            <EmailDiv className="d-flex justify-content-between">
              <InputEmail
                type="email"
                id="exampleFormControlInput1"
                placeholder="Your Email"
              />
              <Buttonmail
                type="submit"
                className="d-flex justify-content-center"
              >
                <HiOutlineMail />
              </Buttonmail>
            </EmailDiv>
          </ColCards>
        </Row>
      </Container>
    </StyleFooter>
  )
}

export default memo(Footer)
