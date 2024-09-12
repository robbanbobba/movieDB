import useFetchOne from '../hooks/useFetchOne'
import { useParams } from 'react-router'
import { Starship } from '../services/StarWarsAPI.types'
import { Alert, Spinner } from 'react-bootstrap'
import Heading from '../components/Heading'
import StarshipCard from '../components/StarshipCard'

export default function StarshipPage() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetchOne<Starship>('starships', Number(id))
  console.log(data)

  if (isLoading) return
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <>
      <Heading heading={data ? data.name : "Starship Page"} />
      {data && <StarshipCard data={data} />}
    </>
  )
}