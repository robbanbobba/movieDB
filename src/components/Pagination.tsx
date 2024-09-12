import React from 'react'
import PagiMui from '@mui/material/Pagination';
import Stack  from '@mui/material/Stack';

interface PaginationProps {
  hasNextPage: boolean;
	hasPreviousPage: boolean;
  onNewPage: (event: React.ChangeEvent<unknown>, page: number) => void;
	page: number;
	totalPages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  hasNextPage,
	hasPreviousPage,
  onNewPage,
	page,
	totalPages,
}) => {
  return (
    <>
        <Stack>
          <PagiMui count={totalPages} hideNextButton={!hasNextPage} hidePrevButton={!hasPreviousPage} onChange={onNewPage} page={page}/>
        </Stack>
    </>
  )
}

export default Pagination;