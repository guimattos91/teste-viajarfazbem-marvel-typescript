import { memo } from 'react'

import { LinkStyled, NavBarStyled } from './styles'

const NavHeader: React.FC = () => {
  return (
    <NavBarStyled>
      <ul>
        <li>
          <LinkStyled to="/filmes">FILMES</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/quadrinhos">QUADRINHOS</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/programas-de-tv">PROGRAMAS DE TV</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/jogos">JOGOS</LinkStyled>
        </li>
      </ul>
    </NavBarStyled>
  )
}

export default memo(NavHeader)
