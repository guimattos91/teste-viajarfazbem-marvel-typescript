import { memo } from 'react'

import { Col, Container } from 'react-bootstrap'

import {
  Buttonmail,
  InputEmail,
  RowStyled,
  StyledSection,
  TextOpenSans,
  TextOswald,
  TitleBox,
} from './styles'

const NewsAndEmail: React.FC = () => {
  return (
    <StyledSection>
      <Container className="py-3 py-md-5">
        <RowStyled>
          <Col xs={12} md={5}>
            <TitleBox>RECEBA AS NOVIDADES DA MARVEL</TitleBox>
          </Col>

          <Col
            xs={12}
            md={7}
            className="d-flex flex-column justify-content-center"
          >
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
        </RowStyled>
      </Container>
    </StyledSection>
  )
}

export default memo(NewsAndEmail)
