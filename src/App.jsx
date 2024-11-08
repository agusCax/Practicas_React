import { useState } from 'react'
import './App.css'
import freecodecampLogo from './assets/fcc_primary_large.png'
import ListaTareas from './componentes/lista-tareas.jsx'

function App() {
  
  return (
    <>
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contendor'> 
        <img 
        className='freecodecamp-logo'
        src={freecodecampLogo} 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h2>Mis tareas</h2> 
        <ListaTareas/>
      </div>
    </div>
    </> 
  )
}

export default App
