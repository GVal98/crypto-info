import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { useGetFavoritesQuery } from '../../api/favoritesApi'
import { useGetCoinsQuery } from '../../api/coinsApi'
import Loader from '../Loader'
import Table from './Table'
import Pagination from './Pagination'

export default function CoinsList() {
  const pageNumber = useParams().pageNumber || 1
  const { data, isError, isFetching } = useGetCoinsQuery(pageNumber)

  const accessToken = useSelector((state) => state.user.accessToken)

  const { data: favoritesData } = useGetFavoritesQuery(accessToken, {
    skip: !accessToken,
  })

  return (
    <>
      <Loader loading={isFetching} />
      <Typography sx={{ mb: 1 }} variant="h4" component="h1">
        Cryptocurrency List
      </Typography>
      {isError && 'Error'}
      {data
      && (
      <>
        <Table data={data} favorites={favoritesData || []} />
        <Pagination pageNumber={pageNumber} />
      </>
      )}
    </>
  )
}
