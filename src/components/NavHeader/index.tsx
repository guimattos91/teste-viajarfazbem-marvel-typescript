import { memo } from 'react'

import { LinkStyled, NavBarStyled } from './styles'

const NavHeader: React.FC = () => {
  return (
    <NavBarStyled>
      <LinkStyled to="/characters">FILMES</LinkStyled>

      <LinkStyled to="/comics" className="px-3">
        QUADRINHOS
      </LinkStyled>

      <LinkStyled to="/comics" className="px-3">
        PROGRAMAS DE TV
      </LinkStyled>

      <LinkStyled to="/comics">JOGOS</LinkStyled>
    </NavBarStyled>
  )
}

export default memo(NavHeader)
