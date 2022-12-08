import styled from 'styled-components'

export const EmailDiv = styled.div`
  padding: 1rem 5rem;
  background-color: #fff;
  border-color: #dedede;
  border-style: solid;
  border-width: thin;
  flex: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    border-color: #fa2d01;
  }
`

export const Buttonmail = styled.button`
  padding: 0.75rem 2rem;
  background-color: #fa2d01;
  border-style: solid;
  border-color: #fa2d01;
  align-items: center;
  justify-content: center;
  flex: flex;
  border: none;
  color: #fff;
`

export const InputEmail = styled.input`
  border-style: none;
  padding-left: 1rem;
  width: 100%;
`
export const TextOswald = styled.p`
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
`
export const TextOpenSans = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  padding: 0;
  margin: 0;
`
export const TitleBox = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  padding: 0;
  margin: 0;
  background-color: red;
  padding: 5rem;
`

export const StyledSection = styled.section`
  font-family: 'Open Sans', sans-serif;
  background-color: black;
  color: white;
  flex: flex;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    text-align: center;
  }
`
