import { Typography, Button, Card, CardActions, CardContent } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../store/userSlice'
import { useGetFavoritesQuery } from '../../api/usersApi'

export default function AccountInfo() {
  const handleLogout = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('accessToken')
    dispatch(setUser({
      username: null,
      accessToken: null
    }))
  }

  const dispatch = useDispatch()
  const username = useSelector(state => state.user.username)
  const accessToken = useSelector(state => state.user.accessToken)

  const { data } = useGetFavoritesQuery(accessToken)

  return (
    <>
      <Typography sx={{ mb: 3 }} variant="h4" component="h1">
        Account
      </Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="body2">
            Username
          </Typography>
          <Typography sx={{ mb: 2 }} variant="h5">
            {username}
          </Typography>
          <Typography variant="body2">
            Favorites count
          </Typography>
          <Typography variant="h5">
            {data && data.length}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleLogout}>Log Out</Button>
        </CardActions>
      </Card>    
    </>
  )
}