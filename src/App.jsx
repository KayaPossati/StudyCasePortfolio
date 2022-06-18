import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Xp from './components/experience/Xp'
import Services from './components/services/Services'
import Portifolio from './components/portifolio/Portifolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Xp />
      <Services />
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
