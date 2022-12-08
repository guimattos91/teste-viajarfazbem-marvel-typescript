import { memo } from 'react'

import { LinkStyled, NavBarStyled } from './styles'

const NavHeader: React.FC = () => {
  return (
    <NavBarStyled>
      <ul>
        <li>
          <LinkStyled to="/characters">FILMES</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/comics">QUADRINHOS</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/comics">PROGRAMAS DE TV</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/comics">JOGOS</LinkStyled>
        </li>
      </ul>
    </NavBarStyled>
  )
}

export default memo(NavHeader)
