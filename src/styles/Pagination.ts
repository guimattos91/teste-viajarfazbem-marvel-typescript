import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {
    list-style: none;
    color: #ffffff;

    a {
      display: inline-block;
      border: none;
      padding: 10px 20px;
      border-radius: 3px;
      margin: 5px 5px;
      color: #ffffff;
      text-decoration: none;
      background-color: #fa2d01;
    }

    &.selected a {
      background-color: #151515;
      color: #ffffff;
      border: none;

      &:hover {
        color: #fa2d01;
      }
    }
  }
`
