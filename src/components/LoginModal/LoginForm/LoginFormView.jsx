import { Button, DialogContent, TextField, DialogActions } from '@material-ui/core'
import { Form, Field } from 'formik'
import Loader from '../../Loader'

const MaterialField = ({ field, form, ...props }) => (
  <TextField
    margin="dense"
    fullWidth
    variant="standard"
    {...field}
    {...props}
  />
)

export default function LoginFormView({ isSubmitting, errors, touched, handleClose }) {
  return (
    <Form>
      <DialogContent>
        <Field type="text" name="username" label="Username (Anything)" autoFocus error={Boolean(touched.username && errors.username)} helperText={touched.username && errors.username} as={MaterialField} />
        <Field type="password" name="password" label="Password (Anything)" error={Boolean(touched.password && errors.password)} helperText={touched.password && errors.password} as={MaterialField} />
        <Loader loading={isSubmitting} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button type="submit" disabled={isSubmitting}>Log In</Button>
      </DialogActions>
    </Form>
  )
}
