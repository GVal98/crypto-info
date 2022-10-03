import { AppBar, Box, Toolbar, Typography, Button } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function HeaderView({ username, accountButtonPath }) {
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
            to={accountButtonPath}
          >
            {username ?? 'Log In'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
