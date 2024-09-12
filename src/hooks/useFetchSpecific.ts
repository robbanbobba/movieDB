import { useState, useEffect } from 'react';
import { getSpecific } from '../services/StarWarsAPI';


export default function useFetchSpecific<T>(endpoint: string, query: string, page?: number) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<null | string>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = (async () => {
            if (query.length > 0) {
                try {
                    setIsLoading(true)
                    const data = await getSpecific<T>(endpoint, query, page)
                    setData(data)
                } catch (err) {
                    setError(err instanceof Error ? err.message : 'Failed to get data')
                } finally {
                    setIsLoading(false)
                }
            }
        })
        getData();
    }, [endpoint, query, page])


    return { data, isLoading, error }
}
