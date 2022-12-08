import styled from 'styled-components'

export const InputStyle = styled.input`
  border: none;
  border-bottom: 2px solid red;
  background-color: transparent;
  color: black;

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
  margin-right: 0.5rem;
`

export const DivStyled = styled.div`
  flex: flex;
  display: flex;
  flex-wrap: wrap;
`
export const PStyled = styled.p`
  text-decoration: none;
  padding: 25px 50px 75px;
  font-family: 'Open Sans', sans-serif;
  font-size: large;
  padding-bottom: 50px;
  background-color: #fff;
`
