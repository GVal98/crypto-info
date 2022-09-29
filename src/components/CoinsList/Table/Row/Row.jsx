import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '../../../../api/favoritesApi'
import RowView from './RowView'

export default function Row({ data, isFavorite }) {
  const addToFavorites = () => {
    if (!accessToken) {
      history.push(`${history.pathname === '/' ? '' : history.pathname}/login`)
      return
    }
    if (isFavorite) {
      removeFavorite({ accessToken, tokenId: data.id })
      return
    }
    addFavorite({ accessToken, tokenId: data.id })
  }

  const [addFavorite] = useAddFavoriteMutation()
  const [removeFavorite] = useRemoveFavoriteMutation()
  const accessToken = useSelector((state) => state.user.accessToken)
  const history = useHistory()

  return (
    <RowView
      data={data}
      isFavorite={isFavorite}
      addToFavorites={addToFavorites}
    />
  )
}
