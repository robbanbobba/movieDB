import "../assets/scss/Imagelist.scss";
import useFetchAll from '../hooks/useFetchAll';
import useFetchSpecific from '../hooks/useFetchSpecific';
import { ApiResponseCharacters } from '../services/StarWarsAPI.types';
import { Spinner, Alert } from 'react-bootstrap';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import Heading from '../components/Heading';
import useSetPage from '../hooks/useSetPage';
import PeopleListCard from "../components/PeopleListCard";


function PeoplesPage() {

  const { currentPage, setSearchParams, searchParams, changePage } = useSetPage()

  const {
    data: generalData,
    error: generalError,
    isLoading: generalIsLoading,
  } = useFetchAll<ApiResponseCharacters>('people', Number(currentPage));

  const urlQuery = searchParams.get("query")

  const {
    data: specificData,
    error: specificError,
    isLoading: specificIsLoading,
  } = useFetchSpecific<ApiResponseCharacters>('people', urlQuery!, Number(currentPage));

  if (generalIsLoading || specificIsLoading) return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  if (generalError || specificError) return <Alert variant="danger">{generalError ? generalError : specificError}</Alert>;

  return (
    <>
      <Heading heading="Characters Page 🧌🥷🧜‍♀️" />
      <Search onSearch={(q: string) => setSearchParams({ ...Object.fromEntries(searchParams), query: q, page: '1' })} />
      {generalData && !specificData && <PeopleListCard generalData={generalData} />}
      {specificData && <PeopleListCard generalData={specificData} />}
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

export default PeoplesPage