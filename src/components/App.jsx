import { React , useState } from 'react'

import Header from './header'
import Home from './home'
import Flavours from './flavours'
import Footer from './footer'
import AboutUs from './About-Us'
import Location from './Location'
import ContactUs from './ContactUs'

function App() {

  function getKey(key){
    console.log(key)
  }
  return(
    <>
    <Header/>
    <Home />
    <Flavours 
      giveKey ={getKey}
      />
    <Location />
    <AboutUs />
    <ContactUs />
    <Footer/>
    </>
  )
}

export default App;
