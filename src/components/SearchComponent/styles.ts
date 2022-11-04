import { Ratio } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  padding: 2px 15px;
  clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
`

export const PStyled = styled.p`
  text-decoration: none;
  padding: 25px 50px 75px;
  font-family: 'Roboto', sans-serif;
  font-size: large;
  padding-bottom: 50px;
  background-color: #fff;
`
