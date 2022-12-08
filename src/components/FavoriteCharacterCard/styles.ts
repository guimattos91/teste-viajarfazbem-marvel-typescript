import { Ratio } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  p {
    text-decoration: none;
    padding: 0.5rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    color: white;

    &:hover {
      color: #fff;
    }
  }
`
export const DivRatio = styled(Ratio)`
  border-style: none none solid none;
  border-color: #fa2d01;
  border-width: large;
`

export const CardBody = styled.div`
  background-color: black;

  flex: flex;
  align-items: center;
  padding-bottom: 20px;

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
