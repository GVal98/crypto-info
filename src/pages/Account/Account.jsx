import { useSelector, useDispatch } from 'react-redux'
import { logOut, selectUsername, selectAccessToken } from '../../store/userSlice'
import { useGetFavoritesQuery } from '../../api/favoritesApi'
import AccountView from './AccountView'

export default function AccountInfo() {
  const dispatch = useDispatch()
  const username = useSelector(selectUsername)
  const accessToken = useSelector(selectAccessToken)
  const { data: favorites } = useGetFavoritesQuery(accessToken)

  return (
    <AccountView
      username={username}
      favorites={favorites}
      handleLogout={() => dispatch(logOut())}
    />
  )
}
