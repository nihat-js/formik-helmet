import { useState } from 'react'
import './App.scss'
import { ErrorMessage, Formik, Form, Field } from 'formik'
function App() {

  const [data, setData] = useState([{
    firstName : 'testFirst',
    lastName : 'testLast',
    email : 'testEmail',
    message : 'testMessage' ,
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
            {data.map ( x => <Box data={x} /> ) }
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
      <span className="email"> email :  {props.data.email} </span>
      <span className='phoneNumber'  > phoneNumber  {props.data.phoneNumber} </span>
    </div>
    <div className="footer">
      <span className='message'> Message : {props.data.message} </span>
    </div>
    
  </div>
  )
  
}

export default App