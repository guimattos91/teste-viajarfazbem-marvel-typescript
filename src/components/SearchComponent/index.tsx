import { memo, useState } from 'react'

import { ButtonStyle, InputStyle } from './styles'

interface ISearchProps {
  handleSearch: () => Promise<void>
  clearSearch: () => Promise<void>
}

const SearchComponent: React.FC<ISearchProps> = ({
  handleSearch,
  clearSearch,
}) => {
  const [search, setSearch] = useState('')

  return (
    <>
      <InputStyle
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="my-4 my-md-2">
        <ButtonStyle type="button" onClick={handleSearch}>
          <p className="m-0 px-2">Buscar</p>
        </ButtonStyle>
        {search.length > 0 && (
          <ButtonStyle type="button" onClick={clearSearch}>
            <p className="m-0 px-2">Limpar</p>
          </ButtonStyle>
        )}
      </div>
    </>
  )
}

export default memo(SearchComponent)
