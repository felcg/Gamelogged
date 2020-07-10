/* eslint-disable react/jsx-indent-props */
import React from 'react'
import { Button } from 'react-bootstrap'
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
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
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Password needs to be at least 6 characters long'),
})

const SignUp = () => (
  <div className="form__signup">
    <h1 className="form__title">Join Gamelogged.com!</h1>
    <Formik initialValues={{
      name: '', username: '', email: '', password: '',
    }}

    validationSchema={SignupSchema}

    onSubmit={(values, { setSubmitting }) => {
      console.log(values)
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 400)
    }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="div" className="form__error" />


          <label>Username</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" className="form__error" />


          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className="form__error" />


          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className="form__error" />


          <Button variant="primary" type="submit" disabled={isSubmitting}>
            SignUp
          </Button>
        </Form>
      )}
    </Formik>
  </div>
)

export default SignUp
