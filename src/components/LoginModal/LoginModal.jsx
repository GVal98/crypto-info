import { Dialog, DialogTitle } from '@material-ui/core'
import { Route, useLocation, useHistory } from 'react-router-dom'
import LoginForm from './LoginForm'

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
        <LoginForm handleClose={handleClose} />
      </Dialog>
    </Route>
  )
}
