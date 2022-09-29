import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useGetFavoritesQuery } from '../../api/favoritesApi'
import { useGetCoinsQuery } from '../../api/coinsApi'
import CoinsListView from './CoinsListView'

export default function CoinsList() {
  const pageNumber = useParams().pageNumber || 1
  const { data, isError, isFetching } = useGetCoinsQuery(pageNumber)

  const accessToken = useSelector((state) => state.user.accessToken)
  const { data: favoritesData } = useGetFavoritesQuery(accessToken, {
    skip: !accessToken,
  })

  return (
    <CoinsListView
      data={data}
      isFetching={isFetching}
      isError={isError}
      favorites={favoritesData || []}
      pageNumber={pageNumber}
    />
  )
}
