import { memo, useEffect } from 'react'

import { Spinner } from 'react-bootstrap'

import { useCharacters } from 'context/CharactersContext'

import { getImageUrl, strToSlug } from 'helpers'

import { CardBody, DivRatio, GradientDiv, NameStyled, PLink } from './styles'

interface ICharactersProps {
  id: number
}

const FavCharacterCard: React.FC<ICharactersProps> = ({ id }) => {
  const { character, isLoading, error, fetchCharacter } = useCharacters()
  useEffect(() => {
    fetchCharacter(id)
  }, [fetchCharacter, id])

  return (
    <CardBody style={{ width: '100% ' }}>
      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" variant="danger" />
        </div>
      )}

      {!isLoading && !error && character && (
        <PLink to={`/characters/${character.id}/${strToSlug(character.name)}`}>
          <DivRatio
            aspectRatio="1x1"
            style={{
              backgroundImage: `url(${getImageUrl(character.thumbnail)})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          >
            <GradientDiv />
          </DivRatio>
          <NameStyled className="pt-3">{character.name}</NameStyled>
        </PLink>
      )}
    </CardBody>
  )
}

export default memo(FavCharacterCard)
