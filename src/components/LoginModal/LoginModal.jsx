import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core'
import { Route, useLocation, useHistory } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup';
import Loader from '../Loader'
import { getUser } from '../../store/userSlice'

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

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

export default function LoginModal() {
  const handleClose = () => {
    history.push(mainPath)
  }

  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const history = useHistory()
  const mainPath = pathname.slice(0, pathname.length - path.length)

  return (
    <Route path={`${mainPath}${path}`}>
      <Dialog open onClose={handleClose}>
        <DialogTitle>Log In</DialogTitle>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            dispatch(getUser(values)).unwrap()
              .then(() => {
                handleClose()
              })
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <DialogContent>
                <Field type="text" name="username" label="Username" autoFocus error={Boolean(touched.username && errors.username)} helperText={touched.username && errors.username} as={MaterialField} />
                <Field type="password" name="password" label="Password" error={Boolean(touched.password && errors.password)} helperText={touched.password && errors.password} as={MaterialField} />
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
