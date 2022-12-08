import styled from 'styled-components'

export const StyledLink = styled.a`
  font-family: 'Oswald', sans-serif;
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
export const ButtonStyle = styled.button`
  background-color: #fa2d01;
  border: none;
  color: white;
  flex: flex;
  padding: 0px 15px;
  clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
`
export const ButtonBack = styled.button`
  display: flex;
  flex: flex;
  justify-content: center;
  background-color: #fa2d01;
  border: none;
  text-align: center;
`
export const DivError = styled.div`
  flex: flex;
  justify-content: center;
  text-align: center;
`
