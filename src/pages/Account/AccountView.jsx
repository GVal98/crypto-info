import { Typography, Button, Card, CardActions, CardContent } from '@material-ui/core'

export default function AccountInfoView({ username, favoritesCount, handleLogout }) {
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
            {favoritesCount}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleLogout}>Log Out</Button>
        </CardActions>
      </Card>
    </>
  )
}
