import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardBody = styled.div`
  flex: flex;
  align-items: center;

  &:hover {
    border-color: #fa2d01;
  }
`

export const RatioDiv = styled.div`
  position: relative;
  width: 100%;

  ::before {
    display: block;
    padding-top: 150%;
    content: '';
  }
`

export const PLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Bebas Neue', cursive;
  font-size: large;

  &:hover {
    color: #fa2d01;
    text-decoration: none;
  }
`
export const DivImage = styled.img`
  width: 14rem;
`
