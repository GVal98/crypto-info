import {
  AppBar, Box, Toolbar, Typography, Button,
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const { pathname } = useLocation()
  const username = useSelector((state) => state.user.username)

  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
            variant="h6"
            component={Link}
            to="/"
          >
            Crypto Info
          </Typography>
          <Button
            color="inherit"
            size="large"
            endIcon={<AccountCircle />}
            component={Link}
            to={username ? '/account' : `${pathname === '/' ? '' : pathname}/login`}
          >
            {username ?? 'Log In'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
