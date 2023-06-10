import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';
import  Tarea from "./Tarea";

function ListaDeTareas(){

	const agregarTarea = tarea => {
		console.log(tarea);

		if(tarea.texto.trim()) { //comprueba si despues de eliminar los espacios en blanco tine algun valor o si esta vacio
			tarea.texto = tarea.texto.trim();

			const tareasActualizadas = [tarea, ...tareas ]; //operador de propagación 
			setTareas(tareasActualizadas);
		}
	}

	/** estado de tareas y funcion para actualizar tareas */
	const [tareas, setTareas] = useState([]);


	/**eliminar una tarea */
	const eliminarTarea = id => { //filter se utiliza para crear un nuevo array que excluya la tarea con el id especificado
		const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
		setTareas(tareasActualizadas);
	}


	/**marcar una tarea como completada */
	const completarTarea = id => { //TODO: ver de donde viene el "id" de esta funcion anonima
		
		const tareasActualizadas = tareas.map(tarea => {
			if(tarea.id === id) {
				tarea.completada = !tarea.completada;
			}
			return tarea;
		});

		setTareas(tareasActualizadas);
	}

	return(
		<>
		    {/* este componeente viene de "TareaFormulario" */}
			<TareaFormulario onSubmit={agregarTarea} /> 

			{/* lista de tareas que voy creando cada vez */}
			<div className='tareas-lista-contenedor'>
				{
					tareas.map( (tarea) => /*tarea aqui es un objeto */
					 <Tarea
					  key={tarea.id}
						id={tarea.id}
						texto={tarea.texto}
						completada={tarea.completada}
						completarTarea={completarTarea}
						eliminarTarea={eliminarTarea}
					 />
					)
				}
			</div>
		</>
	);
}

export default ListaDeTareas;