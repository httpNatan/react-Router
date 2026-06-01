import { useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router'
import Home from "./paginas/Home"
import About from './paginas/About'
import Navbar from './componentes/Navbar'

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
