import { AppBar, Box, Toolbar, Typography, IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
            variant="h6"
            component={Link} to="/"
          >
            Crypto Info
          </Typography>
          <IconButton
            color="inherit"
            component={Link}
            to={`${pathname === '/' ? '' : pathname}/login`}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

