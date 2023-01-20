import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom'
import loginService from '../../services/login'
import { login } from '../../reducers/userReducer'
import './Login.scss'

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Password needs to be at least 6 characters long'),
})

const Login = () => {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  const userFromStore = useSelector((state) => state.user)
  const loggedUserJSON = window.localStorage.getItem('loggedUser')

  useEffect(() => {
    setUser(userFromStore)
  }, [userFromStore])

  useEffect(() => {
    if (success) setError(false)
  }, [success])

  if (loggedUserJSON) {
    return (
      user &&
      <Redirect to={`/profile/${user.id}`} />
    )
  }

  return (
    <div className="form">
      {success === null ? (
        <div className="form__signup">
          <h1 className="form__title">Join Gamelogged.com!</h1>
          <Formik
            initialValues={{
              name: '',
              username: '',
              email: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              const input = {
                email: values.email,
                password: values.password,
              }

              try {
                const user = await loginService.login(input)
                dispatch(login(user))
                setSubmitting(false)
                setSuccess('Successfully logged. See your account here.')
                window.localStorage.setItem('loggedUser', JSON.stringify(user))
              } catch (error) {
                setError(error.response.data)
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="form__error"
                />

                <label>Password</label>
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="form__error"
                />

                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <div className="form__result--success">
          <p>{success}</p>
        </div>
      )}

      {error && (
        <div className="form__error--db">
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}

export default Login
