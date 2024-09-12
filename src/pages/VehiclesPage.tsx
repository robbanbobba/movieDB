import "../assets/scss/Imagelist.scss";
import useFetchAll from '../hooks/useFetchAll';
import useFetchSpecific from '../hooks/useFetchSpecific';
import { ApiResponseVehicles } from '../services/StarWarsAPI.types';
import { ListGroup, ListGroupItem, Spinner, Alert } from 'react-bootstrap';
import useNavigation from '../hooks/useNavigation';
import useSetPage from '../hooks/useSetPage';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import Heading from '../components/Heading';

function VehiclesPage() {


  const { navigateTo } = useNavigation()
  const { currentPage, setSearchParams, searchParams, changePage } = useSetPage()


  const {
    data: generalData,
    error: generalError,
    isLoading: generalIsLoading,
  } = useFetchAll<ApiResponseVehicles>('vehicles', Number(currentPage));

  const urlQuery = searchParams.get("query")

  const {
    data: specificData,
    error: specificError,
    isLoading: specificIsLoading,
  } = useFetchSpecific<ApiResponseVehicles>('vehicles', urlQuery!, Number(currentPage));

  if (generalIsLoading || specificIsLoading) return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  if (generalError || specificError) return <Alert variant="danger">{generalError ? generalError : specificError}</Alert>;

  return (
    <>
      <Heading heading="Vehicles Page 🚜" />
      <Search onSearch={(q: string) => setSearchParams({ ...Object.fromEntries(searchParams), query: q, page: '1' })} />
      {generalData && !specificData && <ListGroup>
        {generalData?.data.map((vehicle) => (
          <ListGroupItem key={vehicle.id} onClick={() => navigateTo('vehicle', vehicle.id)}>{vehicle.name}</ListGroupItem>
        ))}
      </ListGroup>}
      {specificData && <ListGroup>
        {specificData?.data.map((vehicle) => (
          <ListGroupItem key={vehicle.id} onClick={() => navigateTo('vehicle', vehicle.id)}>{vehicle.name}</ListGroupItem>
        ))}
      </ListGroup>}
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

export default VehiclesPage
