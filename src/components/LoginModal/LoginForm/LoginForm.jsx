import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { getUser } from '../../../store/userSlice'
import LoginFormView from './LoginFormView'

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
})

export default function LoginForm({ handleClose }) {
  const dispatch = useDispatch()

  const handleSubmit = async (values) => {
    await dispatch(getUser(values)).unwrap()
    handleClose()
  }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {(formProps) => <LoginFormView {...formProps} handleClose={handleClose} />}
    </Formik>
  )
}
