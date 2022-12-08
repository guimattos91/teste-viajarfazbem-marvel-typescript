import styled from 'styled-components'

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

    @media (max-width: 678px) {
      text-align: center;
      font-size: 48px;
    }
  }

  @media (max-width: 576px) {
    text-align: center;
  }
`
