import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {
  Buttonmail,
  InputEmail,
  StyledSection,
  TextOpenSans,
  TextOswald,
  TitleBox,
} from './styles'

const NewsAndEmail: React.FC = () => {
  return (
    <StyledSection>
      <Container className="py-3 py-md-5">
        <Row className="row-cols-1 row-cols-md-2 justify-content-center justify-content-lg-between align-items-center">
          <Col className="py-3 py-md-0">
            <TitleBox>RECEBA AS NOVIDADES DA MARVEL</TitleBox>
          </Col>

          <Col className="py-3 py-md-0">
            <TextOswald>
              Cadastre-se para receber nossas notícias em primeira mão!
            </TextOswald>
            <TextOpenSans>SEU MELHOR E-MAIL</TextOpenSans>
            <div className="d-flex">
              <InputEmail
                type="email"
                id="exampleFormControlInput1"
                placeholder="Your Email"
              />
              <Buttonmail
                type="submit"
                className="d-flex justify-content-center"
              >
                Enviar
              </Buttonmail>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default memo(NewsAndEmail)
