import { memo } from 'react'

import { Link } from 'react-router-dom'

import { getImageUrl, strToSlug } from 'helpers'

import { CharacterType } from 'types/CharacterType'

import { CardBody, DivRatio } from './styles'

interface ICharactersProps {
  character: CharacterType
}

const FavoriteCharacterCard: React.FC<ICharactersProps> = ({ character }) => {
  return (
    <CardBody style={{ width: '100% ' }}>
      <Link
        to={`/characters/${character.id}/${strToSlug(character.name)}`}
        className="stretched-link"
      >
        <DivRatio
          aspectRatio="1x1"
          style={{
            backgroundImage: `url(${getImageUrl(character.thumbnail)})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        >
          <p className="pt-3">{character.name}</p>
        </DivRatio>
      </Link>
    </CardBody>
  )
}

export default memo(FavoriteCharacterCard)
