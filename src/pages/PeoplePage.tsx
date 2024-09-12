import useFetchOne from '../hooks/useFetchOne'
import { useParams } from 'react-router'
import { Character } from '../services/StarWarsAPI.types'
import { Alert, Spinner } from 'react-bootstrap'
import Heading from '../components/Heading'
import PeopleCard from '../components/PeopleCard'

export default function PeoplePage() {
    const { id } = useParams()
    const { data, isLoading, error } = useFetchOne<Character>('people', Number(id))
    console.log(data)

    if (isLoading) return <p>Loading...
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></p>;
    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
        <>
            <Heading heading={data ? data.name : "CharacterPage"} />
            {data &&
                <PeopleCard data={data} />
            }
        </>
    )
}