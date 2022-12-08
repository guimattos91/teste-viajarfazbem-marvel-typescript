import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > li {
    list-style: none;
    color: #9b9b9b;

    a {
      display: inline-block;
      border: none;
      padding: 10px 20px;
      color: #9b9b9b;
      text-decoration: none;
    }

    &.selected a {
      background-color: #fa2d01;
      color: #ffffff;
      border: none;

      &:hover {
        color: black;
      }
    }
  }
`
