import { Col } from 'react-bootstrap'
import styled from 'styled-components'

export const TitleH2 = styled.h2`
  font-family: 'Bebas Neue', cursive;
  color: white;
  text-align: center;
  flex: flex;
  flex-wrap: nowrap;
`
export const StyledLink = styled.a`
  font-family: 'Bebas Neue', cursive;
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 18px;
  padding: 0;
  margin: 0;

  :hover {
    color: white;
  }
`
export const TitleH1 = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: white;
  text-align: center;
`

export const InputStyle = styled.input`
  border: none;
  border-bottom: 2px solid red;
  background-color: transparent;
  color: #fff;
  :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    border-bottom: 2px solid red;
    outline: 0;
  }
`
export const ButtonStyle = styled.button`
  background-color: #fa2d01;
  border: none;
  color: white;
  flex: flex;
  padding: 0px 15px;
  clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
`
export const ButtonBack = styled.button`
  background-color: #fa2d01;
  border: none;
  text-align: center;
`

export const ColCards = styled(Col)`
  flex: flex;
`
