import useFetchOne from '../hooks/useFetchOne'
import { useParams } from 'react-router'
import { Film } from '../services/StarWarsAPI.types'
import { Alert, Spinner } from 'react-bootstrap'
import Heading from '../components/Heading'
import FilmCard from '../components/FilmCard'

export default function FilmPage() {
    const { id } = useParams()
    const { data, isLoading, error } = useFetchOne<Film>('films', Number(id))

    if (isLoading) return <p>Loading...<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner></p>;
    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
        <>
            <Heading heading={data ? data.title : "FilmPage"} />
            {data && <FilmCard data={data} />}
        </>
    )
}
