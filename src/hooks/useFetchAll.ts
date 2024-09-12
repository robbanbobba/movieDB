import { useEffect, useState } from 'react'
import { getMany } from '../services/StarWarsAPI';


export default function useFetchAll<T>(endpoint: string, page?: number) {

  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchAll = (async () => {
      setIsLoading(true)
      try {
        const res = await getMany<T>(endpoint, page)
        setData(res)
      }
      catch (err) {
        setError(`Failed getting data: ${err}`)
      } finally {
        setIsLoading(false)
      }
    })

    fetchAll()
  }, [endpoint, page])

  return { data, error, isLoading }
}

