import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import propertyImg from "./assets/property.png"
import profilImg from "./assets/profile.jpg"


function App() {
 

  return (
    <div>
      <Sidenav/>
      <Main /> 
      <Work /> 
      <Projects /> 
      <Contact />
      
      

    </div>
  )
}

export default App
