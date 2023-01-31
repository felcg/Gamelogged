/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Loading from 'src/components/Loader/loading'
import { forgotPassword } from 'src/services/forgotPassword'
import './styles.scss'

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})

export const ForgotPassword = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const handleBackToLogin = () => {
    history.push('/login')
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
                email: '',
              }}
              validationSchema={ResetPasswordSchema}
              onSubmit={async (values, { setSubmitting }) => {
                setIsLoading(true)

                const { email } = values

                try {
                  await forgotPassword(email)
                  setSubmitting(false)
                  setSuccess(
                    `Inscructions on how to finish your password reset have been sent to ${email}`
                  )
                } catch (error) {
                  setError(error.response.data)
                } finally {
                  setIsLoading(false)
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

          <Link to="/">
            <Button>BACK TO HOME</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
