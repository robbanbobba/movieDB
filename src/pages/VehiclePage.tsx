import useFetchOne from '../hooks/useFetchOne'
import { useParams } from 'react-router'
import { Vehicle } from '../services/StarWarsAPI.types'
import { Alert, Spinner } from 'react-bootstrap'
import Heading from '../components/Heading'
import VehicleCard from '../components/VehicleCard'

export default function VehiclePage() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetchOne<Vehicle>('vehicles', Number(id))
  console.log(data)

  if (isLoading) return
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <>
      <Heading heading={data ? data.name : "Vehicle Page"} />
      {data && <VehicleCard data={data} />}
    </>
  )
}