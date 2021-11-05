import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core'
import { Route, useLocation, useHistory } from 'react-router'
import { Formik, Form, Field } from 'formik'
import Loader from '../Loader'

const MaterialField = ({ field, form, ...props }) => (
  <TextField
    margin="dense"
    fullWidth
    variant="standard"
    {...field}
    {...props}
  />
)

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
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <DialogContent>
                <Field type="text" name="username" label="Username" autoFocus as={MaterialField} />
                <Field type="password" name="password" label="Password" as={MaterialField} />
                <Loader loading={isSubmitting} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button type="submit" disabled={isSubmitting}>Log In</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </Route>
  )
}