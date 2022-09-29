import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../store/userSlice'
import { useGetFavoritesQuery } from '../../api/favoritesApi'
import AccountView from './AccountView'

export default function AccountInfo() {
  const dispatch = useDispatch()
  const username = useSelector((state) => state.user.username)
  const accessToken = useSelector((state) => state.user.accessToken)
  const { data: favorites } = useGetFavoritesQuery(accessToken)

  return (
    <AccountView
      username={username}
      favorites={favorites}
      handleLogout={() => dispatch(logOut())}
    />
  )
}
