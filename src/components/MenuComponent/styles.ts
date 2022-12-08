import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: white;
  :hover {
    color: white;
    text-decoration: underline;
    text-decoration-color: red;
  }
`
export const ButtonStyled = styled(Button)`
  text-decoration: none;
  display: none;
  color: white;
  background: transparent;
  border: none;

  :hover {
    background: transparent;
    border: none;
  }

  @media (max-width: 767px) {
    display: block;
  }
`

export const NavBarStyled = styled.nav`
  flex: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
  div {
    padding: 0.5em 0em;
  }
`

export const StyledDiv = styled.div`
  font-family: 'Open Sans', sans-serif;
  background-color: black;
  color: white;
  flex: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 3em;

  h1 {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    margin-top: -2em;
    font-size: 100px;

    @media (max-width: 576px) {
      text-align: center;
      font-size: 48px;
    }
  }

  @media (max-width: 576px) {
    text-align: center;
  }
`
export const OffcanvasStyled = styled(Offcanvas)`
  font-family: 'Open Sans', sans-serif;
  background-color: black;
  color: white;
  flex: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const OffcanvasHeaderStyled = styled(Offcanvas.Header)`
  font-family: 'Open Sans', sans-serif;
  color: white;
  flex: flex;
  justify-content: space-between;
  align-items: center;
  button {
    color: white;
  }
`
