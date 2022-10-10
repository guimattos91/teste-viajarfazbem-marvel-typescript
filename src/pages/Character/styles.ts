import styled from 'styled-components'

import bgside from 'assets/bg-side.png'

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
  background-color: rgba(6, 6, 6, 0.2);
`
export const DivBlack = styled.div`
  background: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #060606;
  background-image: url(${bgside});
  background-position: start;
`

export const H1White = styled.h1`
  color: #fff;
  font-family: 'Bebas Neue', cursive;
`

export const H2White = styled.h2`
  color: #fff;
  font-family: 'Bebas Neue', cursive;
`

export const PWhite = styled.p`
  color: #fff;
`
