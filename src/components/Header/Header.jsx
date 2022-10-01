import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUsername } from '../../store/userSlice'
import HeaderView from './HeaderView'

export default function Header() {
  const { pathname } = useLocation()
  const username = useSelector(selectUsername)

  return (
    <HeaderView
      username={username}
      accountButtonPath={username ? '/account' : `${pathname === '/' ? '' : pathname}/login`}
    />
  )
}
