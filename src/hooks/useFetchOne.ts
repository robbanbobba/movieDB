import { useEffect, useState } from 'react'
import { getOne } from '../services/StarWarsAPI';



export default function useFetchOne<T>(endpoint: string, id: number) {

    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<null | string>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = (async () => {
            try {
                setIsLoading(true)
                const data = await getOne<T>(endpoint, id)
                setData(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to get data')
            } finally {
                setIsLoading(false)
            }
        })
        getData();
    }, [endpoint, id])


    return { data, isLoading, error }
}