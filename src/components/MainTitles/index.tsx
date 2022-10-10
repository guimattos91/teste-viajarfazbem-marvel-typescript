import { memo } from 'react'

// import { CharacterType } from 'types/CharacterType';

import { TitleH2 } from './styles'

const Maintitle: React.FC = () => {
  // const character = useState<CharacterType | null>(null);
  return (
    <div className="pt-4 d-flex flex-column align-items-center">
      <TitleH2 className="pt-4">name</TitleH2>
      <div className="pt-3" />
    </div>
  )
}

export default memo(Maintitle)
