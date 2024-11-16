import React from 'react'
import Nav from './Component/Nav'
import Hero from './Component/Hero'
import Tech from './Component/Tech'
import Testimonal from './Component/Testimonal'
import Footer from './Component/Footer'
import FooterBelow from './Component/FooterBelow'
import About from './Component/About'
import Projects from './Component/projects'
const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Tech/>
      <Projects/>
      <Testimonal/>
      <Footer/>
      <FooterBelow/>
    </div>
  )
}

export default App
