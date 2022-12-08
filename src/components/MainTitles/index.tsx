import { memo } from 'react'

// import { CharacterType } from 'types/CharacterType';

import { TitleH2 } from './styles'

interface ITitleProps {
  title: string
  color: string
}

const Maintitle: React.FC<ITitleProps> = ({ title, color }) => {
  return <TitleH2 color={color}>{title}</TitleH2>
}

export default memo(Maintitle)
