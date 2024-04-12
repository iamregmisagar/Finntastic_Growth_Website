import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import Story from '../Components/Story'
const About = () => {
  return (
    <div className="body">
      <>
        <Header />
        <Heading details={{h1:"Company Story", p:"Greetings"}}/>
        <Story/>
      </>
      <Footer />
    </div>
  )
}

export default About
