import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const StyleFooter = styled.footer`
  font-family: 'Open Sans', sans-serif;
  background-color: #222;
  color: #fff;
  flex: flex;
  flex-wrap: wrap;
`
export const StyleNav = styled.nav`
  font-family: 'Open Sans', sans-serif;
  color: #9b9b9b;
  flex: flex;
  flex-direction: column;

  @media (max-width: 475px) {
    text-align: center;
  }
`

export const UlStyled = styled.ul`
  flex: flex;
  padding: 0px;
  margin: 0px;
  li {
    list-style: none;
  }
`

export const RowStyled = styled(Row)`
  flex: flex;

  @media (max-width: 475px) {
    justify-content: center;
  }
`
export const ColCards = styled(Col)`
  flex: flex;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  @media (max-width: 475px) {
    text-align: center;
  }
`

export const H2Styled = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  flex: flex;
  color: white;
  padding: 0px;
  margin: 0px;
  padding-bottom: 0.75rem;

  @media (max-width: 475px) {
    text-align: center;
  }
`

export const TextStyled = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: white;
  padding: 0px;
  margin: 0px;
  padding-bottom: 0.75rem;

  @media (max-width: 475px) {
    text-align: center;
  }
`
export const BlackSignatureDiv = styled.div`
  background-color: black;
  flex: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  padding: 0px;
  margin: 0px;
  p {
    margin: 0px;
    text-align: center;
  }
`
