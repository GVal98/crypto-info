import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '../../../../api/favoritesApi'
import { selectAccessToken } from '../../../../store/userSlice'
import RowView from './RowView'

export default function Row({ coinData, isFavorite }) {
  const addToFavorites = () => {
    if (!accessToken) {
      const { pathname } = history.location
      history.push(`${pathname === '/' ? '' : pathname}/login`)
      return
    }
    if (isFavorite) {
      removeFavorite({ accessToken, tokenId: coinData.id })
      return
    }
    addFavorite({ accessToken, tokenId: coinData.id })
  }

  const [addFavorite] = useAddFavoriteMutation()
  const [removeFavorite] = useRemoveFavoriteMutation()
  const accessToken = useSelector(selectAccessToken)
  const history = useHistory()

  return (
    <RowView
      coinData={coinData}
      isFavorite={isFavorite}
      addToFavorites={addToFavorites}
    />
  )
}
