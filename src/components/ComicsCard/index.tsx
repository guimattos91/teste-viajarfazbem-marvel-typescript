import { memo } from 'react'

import { Link } from 'react-router-dom'

import { getImageUrl, strToSlug } from 'helpers'

import { ComicsType } from 'types/ComicsType'

import { PLink, CardBody, RatioDiv } from './styles'

interface IComicsTypeProps {
  comic: ComicsType
}

const ComicsCard: React.FC<IComicsTypeProps> = ({ comic }) => {
  return (
    <div style={{ width: '100% ' }} className="p-4">
      <Link to={`/comic/${comic.id}/${strToSlug(comic.title)}`}>
        <RatioDiv
          className="ratio"
          style={{
            backgroundImage: `url(${getImageUrl(comic.thumbnail)})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        />
      </Link>
      <CardBody>
        <PLink to={`/comic/${comic.id}/${strToSlug(comic.title)}`}>
          {comic.title}
        </PLink>
      </CardBody>
    </div>
  )
}

export default memo(ComicsCard)
