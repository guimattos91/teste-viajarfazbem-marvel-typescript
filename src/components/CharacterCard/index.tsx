import { memo } from 'react'

import { Ratio } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

import { getImageUrl, strToSlug } from 'helpers'

import { CharacterType } from 'types/CharacterType'

import { CardBody, PLink } from './styles'

interface ICharactersProps {
  character: CharacterType
}

const CharacterCard: React.FC<ICharactersProps> = ({ character }) => {
  return (
    <div style={{ width: '100% ' }} className="p-4">
      <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>
        <Ratio
          aspectRatio="1x1"
          style={{
            backgroundImage: `url(${getImageUrl(character.thumbnail)})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        >
          <div />
        </Ratio>
      </Link>
      <CardBody>
        <PLink to={`/characters/${character.id}/${slugify(character.name)}`}>
          <p className="pt-3">{character.name}</p>
        </PLink>
      </CardBody>
    </div>
  )
}

export default memo(CharacterCard)
