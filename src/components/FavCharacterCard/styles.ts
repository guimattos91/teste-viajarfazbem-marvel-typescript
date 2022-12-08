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

export const CardBody = styled.div`
  background-color: black;

  &:hover {
    background-color: #fa2d01;
    color: #fff;
    border-color: #fa2d01;
    border-style: none none solid none;
    transition: transform 1s linear;
  }
`
export const GradientDiv = styled.div`
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
`
export const DivRatio = styled(Ratio)`
  display: flex;
  flex: flex;
`

export const NameStyled = styled.p`
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  text-align: center;
  color: white;
  align-items: flex-end;
  position: relative;
  margin-top: -50px;
  z-index: 1;
  text-decoration: none;
`
