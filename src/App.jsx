import { useState } from 'react'
import './App.scss'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import {Helmet} from 'react-helmet'


function App() {

  const [data, setData] = useState([{
    firstName: 'Nihat',
    lastName: 'Abdullaade',
    email: 'abdullazadenihat@gmail.com',
    phoneNumber: '0507514178',
    message: 'Sabahlari ayin 30udu  men kod yaziram. (( :/ )) ',
  }])

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setData([
      ...data,
      {
        firstname: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        message: values.message,
      }])
    setSubmitting(false)
  }


  return (
    <div className="App">
      <Helmet>
        <title> Contact </title>
        <meta description="author" content="Nihat" />
        <meta description="og" content="ogg" />
      </Helmet>
      <section className="contact">
        <div className="container">
          <h2 className="heading"> About </h2>
          <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: ''
          }}
            validate={(values) => {
              const errors = {}
              if (!values.firstName) {
                errors.firstName = "First Name Required"
              }
              if (!values.lastName) {
                errors.lastName = "Last Name Required"
              }
              if (!values.email) {
                errors.email = "Email required"
              }
              if (!values.phoneNumber){
                errors.phoneNumber = "Phone number required"
              }
              if (!values.message) {
                errors.message = "Message required"
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting }) => onSubmit(values, { setSubmitting })}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="input" name="firstName" />
                <ErrorMessage name="firstName" component="div" />

                <Field type="input" name="lastName" />
                <ErrorMessage name="lastName" component="div" />

                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />

                <Field type="number" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" />

                <Field type="textarea" name="message" />
                <ErrorMessage name="message" component="div" />

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}

          </Formik>

          <div className="row">
            {data.map(x => <Box data={x} />)}
          </div>

        </div>
      </section>

    </div>
  )
}

function Box(props) {
  return (
    <div className='box'>
      <div className="head">
        <span className="firstName"> firstName :  {props.data.firstName} </span>
        <span className='lastName'  > lastName  :  {props.data.lastName} </span>
      </div>
      <div className="body">
        <span className="email">   {props.data.email} </span>
        <span className='phoneNumber'  >   {props.data.phoneNumber} </span>
      </div>
      <div className="footer">
        <span className='message'> Message : {props.data.message} </span>
      </div>

    </div>
  )

}

export default App
