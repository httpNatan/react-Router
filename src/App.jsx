import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./paginas/Home"
import About from './paginas/About'
import Navbar from './componentes/Navbar'
import Usuario from './componentes/Usuario'

function App() {


  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
            <Navbar/>
          <Routes>
                 <Route path='/' element= {<Home/>} />  
                 <Route path='about'  element={<About/>}/>                            
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
