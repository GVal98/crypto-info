import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            Crypto Info
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
