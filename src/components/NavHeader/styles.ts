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
export const NavBarStyled = styled.nav`
  flex: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
`
