import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props){

	const [ input, setInput ] = useState('');

	const manejarCambio = e => {/**crea un nuevo estado cuando se intruduce una letra new en el input */
		setInput(e.target.value); /**e.target se refiere al elemento HTML que desencadenó el evento. osea input o el campo de texto */
	}

	const manejarEnvio = e =>{ // resivo e = evento
		e.preventDefault();/*evita que se recargue la pagina al enviar el formulario */

		const tareaNueva = { /*un objeto de tarea */
			id: uuidv4(),
			texto: input,
			completada: false,
		}
		props.onSubmit(tareaNueva);  //esto se envia a componente= ListaDeTreas
	}

	return(
		<form
			className='tarea-formulario'
			onSubmit={manejarEnvio} >

			<input className='tarea-input'
				type='text'
				placeholder='Escribe una tarea'
				name='texto'
				onChange={manejarCambio}
			/>
			<button className='tarea-boton'>
				Agregar Tarea
			</button>
		</form>
	);
}

export default TareaFormulario;