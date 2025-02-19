import React from 'react'
import Nav from './Component/Nav'
import Hero from './Component/Hero'
import Tech from './Component/Tech'
import Testimonal from './Component/Testimonal'
import Footer from './Component/Footer'
import FooterBelow from './Component/FooterBelow'
import About from './Component/About'
import Projects from './Component/Projects'
import ServicesPage from './Component/Servies'
const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Tech/>
      <Projects/>
      <Testimonal/>
      <ServicesPage/>
      <Footer/>
      <FooterBelow/>
    </div>
  )
}

export default App
