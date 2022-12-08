import { memo, useCallback, useState } from 'react'

import Offcanvas from 'react-bootstrap/Offcanvas'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'

import {
  ButtonStyled,
  LinkStyled,
  NavBarStyled,
  OffcanvasHeaderStyled,
  OffcanvasStyled,
} from './styles'

const MenuComponent: React.FC = () => {
  const [show, setShow] = useState(false)

  const handleClose = useCallback(() => {
    setShow(false)
  }, [setShow])

  const handleShow = useCallback(() => {
    setShow(true)
  }, [setShow])

  return (
    <>
      <ButtonStyled variant="primary" onClick={handleShow}>
        <BiMenu size={30} />
      </ButtonStyled>

      <OffcanvasStyled show={show} onHide={handleClose}>
        <OffcanvasHeaderStyled>
          <Offcanvas.Title>Menu</Offcanvas.Title>
          <ButtonStyled variant="primary" onClick={handleClose}>
            <AiOutlineClose size={20} />
          </ButtonStyled>
        </OffcanvasHeaderStyled>
        <Offcanvas.Body>
          <NavBarStyled>
            <div>
              <LinkStyled to="/filmes">FILMES</LinkStyled>
            </div>
            <div>
              <LinkStyled to="/quadrinhos">QUADRINHOS</LinkStyled>
            </div>
            <div>
              <LinkStyled to="/programas-de-tv">PROGRAMAS DE TV</LinkStyled>
            </div>
            <div>
              <LinkStyled to="/jogos">JOGOS</LinkStyled>
            </div>
          </NavBarStyled>
        </Offcanvas.Body>
      </OffcanvasStyled>
    </>
  )
}

export default memo(MenuComponent)
