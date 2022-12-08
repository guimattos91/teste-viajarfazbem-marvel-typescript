import { memo } from 'react'

import slugify from 'slugify'

import { getImageUrl } from 'helpers'

import { CharacterType } from 'types/CharacterType'

import { CardBody, DivRatio, PLink } from './styles'

interface ICharactersProps {
  character: CharacterType
}

const CharacterCard: React.FC<ICharactersProps> = ({ character }) => {
  return (
    <CardBody style={{ width: '100% ' }}>
      <DivRatio
        aspectRatio="1x1"
        style={{
          backgroundImage: `url(${getImageUrl(character.thumbnail)})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <div />
      </DivRatio>
      <PLink to={`/characters/${character.id}/${slugify(character.name)}`}>
        <p className="pt-3">{character.name}</p>
      </PLink>
    </CardBody>
  )
}

export default memo(CharacterCard)
