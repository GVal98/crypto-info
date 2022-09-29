import { Typography } from '@material-ui/core'
import Loader from '../Loader'
import Table from './Table'
import Pagination from './Pagination'

export default function CoinsListView({ data, isFetching, isError, favorites, pageNumber }) {
  return (
    <>
      <Loader loading={isFetching} />
      <Typography sx={{ mb: 1 }} variant="h4" component="h1">
        Cryptocurrency List
      </Typography>
      {isError && 'Error'}
      {data && (
        <>
          <Table data={data} favorites={favorites} />
          <Pagination pageNumber={pageNumber} />
        </>
      )}
    </>
  )
}
