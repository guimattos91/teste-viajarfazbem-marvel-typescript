import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  p {
    text-decoration: none;
    padding: 5px;
    font-family: 'Bebas Neue', cursive;
    font-size: large;

    &:hover {
      color: #fff;
    }
  }
`

export const CardBody = styled.div`
  background-color: #fff;
  border-style: solid none none none;
  border-color: #fa2d01;
  border-width: large;
  flex: flex;
  align-items: center;
  padding-bottom: 20px;

  ::after {
    content: '';
    width: 4px;
    height: 4px;
    border-style: solid;
    border-width: 0 0 20px 20px;
    border-color: transparent transparent #060606 transparent;
    z-index: 40;
    float: right;
    clear: both;
  }

  &:hover {
    background-color: #fa2d01;
    color: #fff;
    transition: transform 1s linear;
  }
`

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 20px 20px;
  border-color: transparent transparent #151515 transparent;
`

export const PStyled = styled.p`
  text-decoration: none;
  padding: 25px 50px 75px;
  font-family: 'Roboto', sans-serif;
  font-size: large;
  padding-bottom: 50px;
  background-color: #fff;
`
