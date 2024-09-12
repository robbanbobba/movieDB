import "../assets/scss/Imagelist.scss"
import useFetchAll from '../hooks/useFetchAll'
import useFetchSpecific from '../hooks/useFetchSpecific'
import { ApiResponseFilms } from '../services/StarWarsAPI.types'
import { Card, ListGroup, ListGroupItem, Spinner, Alert } from 'react-bootstrap';
import useNavigation from '../hooks/useNavigation';
import Pagination from '../components/Pagination';
import Search from '../components/Search'
import Heading from '../components/Heading'
import useSetPage from '../hooks/useSetPage'



function FilmsPage() {

  const { navigateTo } = useNavigation()
  const { currentPage, setSearchParams, searchParams, changePage } = useSetPage()


  const {
    data: generalData,
    error: generalError,
    isLoading: generalIsLoading,
  } = useFetchAll<ApiResponseFilms>('films', Number(currentPage));


  const urlQuery = searchParams.get("query")

  const {
    data: specificData,
    error: specificError,
    isLoading: specificIsLoading,
  } = useFetchSpecific<ApiResponseFilms>('films', urlQuery!, Number(currentPage));

  if (generalIsLoading || specificIsLoading) return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  if (generalError || specificError) return <Alert variant="danger">{generalError ? generalError : specificError}</Alert>;

  return (
    <>
      <Heading heading="Films Page 🎞️" />
      <Search onSearch={(q: string) => setSearchParams({ ...Object.fromEntries(searchParams), query: q, page: '1' })} />
      {generalData && !specificData && <ListGroup id="imageList">
        {generalData?.data.map((film) => (
          <ListGroupItem key={film.id} onClick={() => navigateTo('film', film.id)}><Card><div className="card-image-wrapper"><img src={film.image_url} alt={film.title} className="card-image" /></div><div className="card-text">{film.title}</div></Card></ListGroupItem>
        ))}
      </ListGroup>}
      {specificData && <ListGroup id="imageList">
        {specificData?.data.map((film) => (
          <ListGroupItem key={film.id} onClick={() => navigateTo('film', film.id)}><Card><img src={film.image_url} alt={film.title} />{film.title}</Card></ListGroupItem>
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

export default FilmsPage