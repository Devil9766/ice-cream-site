import { React , useState } from 'react'

import Header from './header'
import Home from './home'
import Flavours from './flavours'
import Footer from './footer'

function App() {

  function getKey(key){
    console.log(key)
  }
  return(
    <>
    <Header/>
    <Home />
    <Flavours 
    giveKey ={getKey}/>
    <Footer/>
    </>
  )
}

export default App;
