import { memo } from 'react'

import { CardBody, DivRatio, GradientDiv, NameStyled, PLink } from './styles'

interface IFavoriteCharactersProps {
  imageUrl: string
  name: string
  linkUrl: string
}

const FavCharacterCard: React.FC<IFavoriteCharactersProps> = ({
  imageUrl,
  name,
  linkUrl,
}) => {
  return (
    <CardBody style={{ width: '100% ' }}>
      <DivRatio
        aspectRatio="1x1"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <GradientDiv />
      </DivRatio>
      <PLink to={linkUrl}>
        <NameStyled className="pt-3">{name}</NameStyled>
      </PLink>
    </CardBody>
  )
}

export default memo(FavCharacterCard)
