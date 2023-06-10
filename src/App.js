import React from 'react';
import appTareasLogo from './imagenes/appTareas-logo.png';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' 
          src={appTareasLogo}
          alt='logo freecodecamp'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}


export default App;
