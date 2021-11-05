import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core'
import { Route, useLocation, useHistory } from 'react-router'

const path = '/login'

export default function LoginModal() {
  const handleClose = () => {
    history.push(mainPath)
  }

  const { pathname } = useLocation()
  const history = useHistory()
  const mainPath = pathname.slice(0, pathname.length - path.length)

  return (
    <Route path={`${mainPath}${path}`}>
      <Dialog open onClose={handleClose}>
        <DialogTitle>Log In</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button>Log In</Button>
        </DialogActions>
      </Dialog>
    </Route>
  )
}