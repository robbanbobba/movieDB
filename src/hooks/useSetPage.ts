import { useSearchParams } from 'react-router-dom'
import { CommonApiResponse } from '../services/StarWarsAPI.types';
import { useEffect } from 'react';


export default function useSetPage() {

  const [searchParams, setSearchParams] = useSearchParams()

  let currentPage = searchParams.get("page") ?? 0;

  const getNSetPage = (data: CommonApiResponse) => {

    if (data.current_page) {
      setSearchParams({ currentPage: data.current_page.toString() })
    }
  }
  const setInitialPage = (newPage: number) => {
    setSearchParams({ ...Object.fromEntries(searchParams), page: newPage.toString() })
    console.log('New page? ', currentPage)
  }
  useEffect(() => {
    currentPage = searchParams.get("page") ?? 0;
  }, [setSearchParams])

  const changePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setSearchParams({ ...Object.fromEntries(searchParams), page: newPage.toString() })
    console.log('New page? ', currentPage)
  }

  useEffect(() => {
    if (!searchParams.get('page')) {
      setInitialPage(1);
    }
  }, [])

  return {
    getNSetPage,
    currentPage,
    setSearchParams,
    searchParams,
    changePage
  }
}

