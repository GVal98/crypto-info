import { Typography, Button, Card, CardActions, CardContent } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../store/userSlice'
import { useGetFavoritesQuery } from '../../api/favoritesApi'

export default function AccountInfo() {
  const handleLogout = () => {
    dispatch(logOut())
  }

  const dispatch = useDispatch()
  const username = useSelector((state) => state.user.username)
  const accessToken = useSelector((state) => state.user.accessToken)

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
