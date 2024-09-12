import useFetchOne from '../hooks/useFetchOne'
import { useParams } from 'react-router'
import { SpecieOne } from '../services/StarWarsAPI.types'
import { Alert, Spinner } from 'react-bootstrap'
import Heading from '../components/Heading'
import SpecieCard from '../components/SpecieCard'

export default function SpeciePage() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetchOne<SpecieOne>('species', Number(id))
  console.log(data)

  if (isLoading) return
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <>
      <Heading heading={data ? data.name : "SpeciePage"} />
      {data && <SpecieCard data={data} />}
    </>
  )
}