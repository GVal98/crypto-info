import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import HeaderView from './HeaderView'

export default function Header() {
  const { pathname } = useLocation()
  const username = useSelector((state) => state.user.username)

  return (
    <HeaderView
      username={username}
      accountButtonPath={username ? '/account' : `${pathname === '/' ? '' : pathname}/login`}
    />
  )
}
