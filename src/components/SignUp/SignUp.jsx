/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Loading from '../Loader/Loading'
import signupService from '../../services/signup'
import './SignUp.scss'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name needs to be at least 3 characters long')
    .max(50, 'Name needs to be less than 50 characters long')
    .required('Required'),
  username: Yup.string()
    .min(2, 'Username needs to be at least 3 characters')
    .max(50, 'Username needs to be less than 50 characters long')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Password needs to be at least 6 characters long'),
})

const SignUp = () => {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  return (

    <div className="form">
      {success === null ? (
        <div className="form__signup">
          <h1 className="form__title">Join Gamelogged.com!</h1>

          {error && <div className="form__result">There has been an error, please try again later.</div>}

          <Loading isLoading={isLoading}>
            <Formik
            initialValues={{
              name: '',
              username: '',
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setIsLoading(true)
              const user = {
                name: values.name,
                email: values.email,
                username: values.username,
                password: values.password,
              }

              try {
                await signupService.signup(user)
                setSubmitting(false)
                setSuccess(
                  'Thanks for joining! Check your email to verify your account. If you can\'t find the email, please check your spam folder.'
                )
              } catch (error) {
                console.log('error', error)
                setError(true)
              } finally {
                setIsLoading(false)
              }
            }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <label>Name</label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage
                  name="name"
                  component="div"
                  className="form__error"
                  />

                  <label>Username</label>
                  <Field type="text" name="username" />
                  <ErrorMessage
                  name="username"
                  component="div"
                  className="form__error"
                  />

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
                    SignUp
                  </Button>
                </Form>
              )}
            </Formik>
          </Loading>
        </div>
      ) : (
        <div className="form__result--success">
          <p>{success}</p>

          <Link to="/">
            <Button>BACK TO HOME</Button>
          </Link>
        </div>
      )}
    </div>

  )
}

export default SignUp
