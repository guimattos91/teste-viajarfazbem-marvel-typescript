import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { ComicsType } from 'types/ComicsType'

interface IContextProps {
  comics: ComicsType[]
  comic: ComicsType | null
  error: string | null
  isLoading: boolean
  totalPages: number
  currentPage: number
  fetchComics: (page: number, search?: string) => Promise<void>
  fetchComic: (id: number) => Promise<void>
}

interface ICComicsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const ComicsProvider: React.FC<ICComicsProviderProps> = ({
  children,
}) => {
  const [comics, setComics] = useState<ComicsType[]>([])
  const [comic, setComic] = useState<ComicsType | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const fetchComics = useCallback(async (page: number, search?: string) => {
    const limit = 24
    const offset = (page - 1) * limit

    setCurrentPage(page)
    setIsLoading(true)
    setError(null)

    const params = {
      offset,
      limit,
      titleStartsWith: search?.length ? search : undefined,
    }

    try {
      const {
        data: {
          data: { results, total },
        },
      } = await Api.get('/comics', { params })
      setComics(results)
      setTotalPages(Math.ceil(total / limit))
    } catch {
      setError('Erro: Comic não encontrado')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchComic = useCallback(async (id: number | string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await Api.get(`/comics/${id}`)
      setComic(response.data.data.results[0])
    } catch {
      setError('Erro: Comic não encontrado')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          comics,
          comic,
          error,
          isLoading,
          totalPages,
          currentPage,
          fetchComics,
          fetchComic,
        }),
        [
          comics,
          comic,
          error,
          isLoading,
          totalPages,
          currentPage,
          fetchComics,
          fetchComic,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useComics = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useComics must be within ComicsProvider')
  }

  return context
}
