import { memo } from 'react'

import { Link } from 'react-router-dom'

import CardImage from 'assets/cards-fan-desktop.png'

import {
  Buttonmail,
  MarvelMastercardStyled,
  TextSmall,
  TitleH2,
} from './styles'

const MarvelMastercard: React.FC = () => {
  return (
    <MarvelMastercardStyled>
      <TitleH2>MARVEL MASTERCARD</TitleH2>
      <TextSmall>Desbloqueie seus super poderes</TextSmall>
      <Link to="/">
        <img src={CardImage} alt="credit-card" className="img-fluid" />
      </Link>
      <Buttonmail type="button">CADASTRE-SE AGORA</Buttonmail>
      <p>ENTENDA COMO FUNCIONA</p>
    </MarvelMastercardStyled>
  )
}

export default memo(MarvelMastercard)
