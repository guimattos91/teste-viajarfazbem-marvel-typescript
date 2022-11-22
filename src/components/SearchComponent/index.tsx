import { memo, useCallback, useState } from 'react'

import { ButtonStyle, InputStyle } from './styles'

interface ISearchProps {
  fetchCategory: (page: number, search?: string | undefined) => Promise<void>
}

const SearchComponent: React.FC<ISearchProps> = ({ fetchCategory }) => {
  const [search, setSearch] = useState('')
  const [hasSearch, setHasSearch] = useState(false)

  const handleSearch = useCallback(() => {
    fetchCategory(1, search)
    setHasSearch(true)
  }, [fetchCategory, search, setHasSearch])

  const clearSearch = useCallback(() => {
    setSearch('')
    fetchCategory(1)
    setHasSearch(false)
  }, [fetchCategory, setHasSearch])

  return (
    <>
      <InputStyle
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="my-4 my-md-2">
        {search.length > 0 && (
          <ButtonStyle type="button" onClick={handleSearch}>
            <p className="m-0 px-2">Buscar</p>
          </ButtonStyle>
        )}
        {hasSearch === true && (
          <ButtonStyle type="button" onClick={clearSearch}>
            <p className="m-0 px-2">Limpar</p>
          </ButtonStyle>
        )}
      </div>
    </>
  )
}

export default memo(SearchComponent)
