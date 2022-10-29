import { Ratio, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-color: #dbf8e6;
  height: 100vh;
  background-size: cover;
  background-position: center;
`

export const BlurDiv = styled.div`
  backdrop-filter: blur(3px);
  height: 100%;
  width: 100%;
  border-style: none none solid none;
  border-color: #fa2d01;
  background-color: rgba(6, 6, 6, 0.9);
  flex: flex;
`

export const DivRatio = styled(Ratio)`
  margin-top: -100px;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0 100%,
    0% 20%
  );
`
export const RowStyled = styled(Row)`
  border-style: solid none solid none;
  border-color: #fa2d01;
  margin-top: 50px;
`

export const H1White = styled.h1`
  color: #fff;
  font-family: 'Bebas Neue', cursive;
  margin: 0;
`

export const H2White = styled.h2`
  color: #fff;
  font-family: 'Bebas Neue', cursive;
  margin: 0;
`
export const H3White = styled.h3`
  color: #fff;
  font-family: 'Bebas Neue', cursive;
  margin: 0;
`

export const PWhite = styled.p`
  color: #fff;
  margin: 0;
  font-size: 24px;
`
