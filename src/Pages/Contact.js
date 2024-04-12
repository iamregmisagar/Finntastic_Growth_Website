import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import Heading from '../Components/Heading'
const Contact = () => {
  return (
    <div className="body">
      <>
        <Header />
        <Heading details={{h1:"Reach Out", p:"Do you want to discuss about our services or Have any queries? Don't hesitate to contact  us!"}}/>
        <Form/>
      </>
      <Footer />
    </div>
  )
}

export default Contact
