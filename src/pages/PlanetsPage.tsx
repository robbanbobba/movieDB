import { Alert, Spinner } from 'react-bootstrap'
import useFetchAll from '../hooks/useFetchAll'
import useFetchSpecific from '../hooks/useFetchSpecific'
import { ApiResponsePlanets } from '../services/StarWarsAPI.types'
import useNavigation from '../hooks/useNavigation'
import List from '../components/List'
import Search from '../components/Search'
import useSetPage from '../hooks/useSetPage'
import Pagination from '../components/Pagination'
import Heading from '../components/Heading'


function PlanetsPage() {

  const { navigateTo } = useNavigation()

  const { currentPage, setSearchParams, searchParams, changePage } = useSetPage()


  const {
    data: generalData,
    error: generalError,
    isLoading: generalIsLoading,
  } = useFetchAll<ApiResponsePlanets>('planets', Number(currentPage));


  const urlQuery = searchParams.get("query")

  const {
    data: specificData,
    error: specificError,
    isLoading: specificIsLoading,
  } = useFetchSpecific<ApiResponsePlanets>('planets', urlQuery!, Number(currentPage));


  const handleNavigation = (endpoint: string, id: number) => {
    navigateTo(endpoint, id)
  }


  if (generalIsLoading || specificIsLoading) return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  if (generalError || specificError) return <Alert variant="danger">{generalError ? generalError : specificError}</Alert>;

  return (

    <>
      <Heading heading="PlanetPage 🪐" />

      <Search onSearch={(q: string) => setSearchParams({ ...Object.fromEntries(searchParams), query: q, page: '1' })} />
      {generalData && !specificData && (
        <List
          title="Planets:"
          data={generalData.data.map((planet) => ({
            id: planet.id,
            name: `${planet.name}`,
            onClick: () => handleNavigation('planet', planet.id),
          }))}
        />
      )}
      {specificData && (
        <List
          title="Planets:"
          data={specificData.data.map((planet) => ({
            id: planet.id,
            name: `${planet.name}`,
            onClick: () => handleNavigation('planet', planet.id),
          }))}
        />
      )}
      {generalData && !specificData && generalData.last_page > 1 && (
        <Pagination
          hasNextPage={generalData.current_page < generalData.last_page}
          hasPreviousPage={generalData.current_page > 1}
          onNewPage={changePage}
          page={Number(currentPage)}
          totalPages={generalData.last_page}
        />
      )}

      {specificData && specificData.last_page > 1 && (
        <Pagination
          hasNextPage={specificData.current_page < specificData.last_page}
          hasPreviousPage={specificData.current_page > 1}
          onNewPage={changePage}
          page={Number(currentPage)}
          totalPages={specificData.last_page}
        />
      )}
    </>
  )
}

export default PlanetsPage