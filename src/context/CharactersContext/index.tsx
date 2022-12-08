import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { CharacterType } from 'types/CharacterType'

interface IContextProps {
  characters: CharacterType[]
  BlackPantherBlackWidow: CharacterType[]
  character: CharacterType | null
  error: string | null
  isLoading: boolean
  totalPages: number
  currentPage: number
  fetchCharacter: (id: number | string) => Promise<void>
  fetchBlackPantherWidow: (page: number) => Promise<void>
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
  const [BlackPantherBlackWidow, setBlackPantherBlackWidow] = useState<
    CharacterType[]
  >([])

  const [character, setCharacter] = useState<CharacterType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const fetchCharacters = useCallback(async (page: number, search?: string) => {
    const limit = 30
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

  const fetchBlackPantherWidow = useCallback(async (page: number) => {
    const limit = 100
    const offset = (page - 1) * limit

    setIsLoading(true)
    setError(null)

    const params = {
      offset,
      limit,
    }

    try {
      const response = await Api.get('/characters', { params })
      setBlackPantherBlackWidow(response.data.data.results)
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
          BlackPantherBlackWidow,
          fetchCharacters,
          fetchCharacter,
          fetchBlackPantherWidow,
        }),
        [
          characters,
          character,
          isLoading,
          totalPages,
          currentPage,
          error,
          BlackPantherBlackWidow,
          fetchCharacters,
          fetchCharacter,
          fetchBlackPantherWidow,
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
