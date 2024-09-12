import { useCallback } from "react"


export default function useOpenUrl() {

    const openUrl = useCallback((url: string) => {
        window.open(url, '_blank', 'noopener, noreferrer')
    }, [])


    return {openUrl}
}