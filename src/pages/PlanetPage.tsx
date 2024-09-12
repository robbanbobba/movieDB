import ProductPage from '../components/ProductPage'
import useFetchOne from '../hooks/useFetchOne'
import { Planet } from '../services/StarWarsAPI.types'
import { useParams } from 'react-router'
import { Alert, ListGroup, ListGroupItem, Spinner } from 'react-bootstrap'
import useNavigation from '../hooks/useNavigation'



function PlanetPage() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetchOne<Planet>('planets', Number(id))
  const { navigateTo } = useNavigation()
  console.log("data", data)

  interface film {
    id: number,
    title: string
  }

  if (isLoading) return
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <>
      {data && (
        <ProductPage
          title={data?.name}
          data={[
            { label: 'Climate', value: data.climate },
            { label: 'Diameter', value: data.diameter },
            { label: 'Gravity', value: data.gravity },
            { label: 'Orbital Period', value: data.orbital_period },
            { label: 'Rotation Perion', value: data.rotation_period },
            { label: 'Population', value: data.population },
            {
              label: 'Residents', value: (
                <ListGroup>
                  {data.residents.map((resident, index) => (
                    <ListGroup.Item key={index} onClick={() => navigateTo('people', resident.id)}><a>{resident.name}</a></ListGroup.Item>
                  ))}
                </ListGroup>
              )
            },
            { label: 'Surface Water', value: data.surface_water },
            { label: 'Terrain', value: data.terrain },
            {
              label: 'Appears in movies', value: (
                <ListGroup>
                  {data.films.map((film: film, index: number) => (
                    <ListGroupItem key={index} onClick={() => navigateTo('film', film.id)}><a>{film.title}</a></ListGroupItem>)
                  )}
                </ListGroup>
              )
            }
          ]}
        />)}
    </>
  )
}

export default PlanetPage