import { Breadcrumb } from 'react-bootstrap'
import styled from 'styled-components'

// import Logo from 'assets/A-avenger.png';

export const MainStyle = styled.main`
  background: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #060606;
  background-position: start;
`
export const BreadccrumbStyled = styled(Breadcrumb)`
  padding-bottom: 15px;
  a {
    text-decoration: none;
    color: white;

    .active {
      color: #fa2d01;
    }
  }
`
