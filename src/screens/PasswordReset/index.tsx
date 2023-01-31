/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Loading from '../../components/Loader/loading'
import resetPasswordService from '../../services/resetPassword'
import './styles.scss'

const PasswordResetSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required')
    .min(6, 'Password needs to be at least 6 characters long'),
})

export const ForgotPassword = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const params = useParams()
  const history = useHistory()

  const handleBackToLogin = () => {
    history.push('/login')
  }

  const handleBackToHome = () => {
    history.push('/')
  }

  return (
    <div className="form">
      {success === null ? (
        <div className="form__passwordReset">
          <h1 className="form__title">Password reset</h1>

          {error && <div className="form__result">{error}</div>}

          <Loading isLoading={isLoading}>
            <Formik
              initialValues={{
                password: '',
              }}
              validationSchema={PasswordResetSchema}
              onSubmit={async (values, { setSubmitting }) => {
                setIsLoading(true)

                const { password } = values

                try {
                  await resetPasswordService.resetPassword(
                    params.email,
                    params.token,
                    password
                  )
                  setSubmitting(false)
                  setSuccess('Your password has been reset')
                } catch (error) {
                  setError(error.response.data)
                } finally {
                  setIsLoading(false)
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <label>Password</label>
                  <Field type="password" name="password" />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="form__error"
                  />

                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Confirm
                  </Button>

                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleBackToLogin}
                  >
                    Back
                  </Button>
                </Form>
              )}
            </Formik>
          </Loading>
        </div>
      ) : (
        <div className="form__result--success">
          <p>{success}</p>

          <Button variant="primary" type="button" onClick={handleBackToHome}>
            Back to home
          </Button>
        </div>
      )}
    </div>
  )
}
