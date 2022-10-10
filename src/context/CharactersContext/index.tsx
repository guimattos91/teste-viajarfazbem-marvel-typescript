import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CharacterType } from 'types/CharacterType'

interface IContextProps {
  characters: CharacterType[]
  character: CharacterType | null
  error: string | null
  isLoading: boolean
  totalPages: number
  currentPage: number
  fetchCharacter: (id: number | string) => Promise<void>
  fetchCharacters: (page: number, search?: string) => Promise<void>
}

interface ICharactersProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const CharactersProvider: React.FC<ICharactersProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<CharacterType[]>([])
  const [character, setCharacter] = useState<CharacterType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const fetchCharacters = useCallback(async (page: number, search?: string) => {
    const limit = 24
    const offset = (page - 1) * limit

    setCurrentPage(page)
    setIsLoading(true)
    setError(null)

    const params = {
      offset,
      limit,
      nameStartsWith: search?.length ? search : undefined,
    }

    try {
      const response = await Api.get('/characters', { params })
      setCharacters(response.data.data.results)
      setTotalPages(response.data.data.total / limit)
    } catch {
      setError('Erro: Personagem não encontrado')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchCharacter = useCallback(async (id: number | string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await Api.get(`/characters/${id}`)
      setCharacter(response.data.data.results[0])
    } catch {
      setError('Erro: Personagem não encontrado')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCharacter(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          characters,
          character,
          isLoading,
          totalPages,
          currentPage,
          error,
          fetchCharacters,
          fetchCharacter,
        }),
        [
          characters,
          character,
          isLoading,
          totalPages,
          currentPage,
          error,
          fetchCharacters,
          fetchCharacter,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useCharacters = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useCharacters must be within CharatersProvider')
  }

  return context
}
