import { useNavigate } from 'react-router'

export default function useNavigation() {
    const navigate = useNavigate();

    const navigateTo = (endpoint: string, id?: number) => {
        id ? navigate(`/${endpoint}/${id}`) : navigate(`${endpoint}`) 
    }

    return { navigateTo }
}

