// Importar funciones y hooks
import {Fragment} from 'react'
import { tipoCalculo } from '../../Constants'
import useMedidas from '../Hooks/useMedidas'
import Error from './Error'


const Formulario = () => {

  //Importar funciones y variables declaradas en Context
  const { datos, evaluarDatos, error, setError, obtenerCalculo, calculo, setSpinner, setBtnCalcular, btnCalcular } = useMedidas()

  //Evento de formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    //Mensaje de error para formulario con campos vacíos
    if ( Object.values(datos).includes("") ) {
      
      setError(true);
      return;
    }
    
    //Desactivar mensaje de error
    setError(false)  
    //Mostrar ícono de carga
    setSpinner(true);
    //Empezar a calcular
    setBtnCalcular(true)
    
    //Desactivar ícono de carga y mostrar datos luego de 2 segundos
    setTimeout(() => {
      setBtnCalcular(false)
      setSpinner(false)
      obtenerCalculo()
    }, 2000)
      
  }
  //Formulario
  return (
    <form
      className="bg-white mx-auto max-w-full sm:w-2/3 rounded-xl shadow-black shadow-xl p-5 mt-10"
      onSubmit={handleSubmit}
    >
      {/* mensajes de error */}
      { error && <Error>Debes digitar los valores tipo numéricos y elegir la medida</Error>  }
      { calculo === "Error" && <Error>Solo está permitido la introducción de caracteres numéricos y símbolos de punto (para decimales) y coma (para separar los valores)</Error>  }
      <div>
        <label
            className='font-bold text-lg  block'
        >Datos:</label>
        <textarea 
            className='border-2 rounded-lg w-full px-5 py-1 text-lg font-bold resize-none transition-all focus-within:scale-y-110'
            placeholder='Introduce los datos separados por comas'
            name='texto'
            value={datos["texto"]}
            onChange={ e => evaluarDatos(e) }
        ></textarea>
      </div>

      <div className='my-4'>
        <p className='font-bold text-slate-700 mb-2'>Elije tipo de Medida:</p>
        <div className='flex gap-5'>
          {/* importar el id y el nombre de las medidas declaradas en el index.js de Constants  */}
          { tipoCalculo.map( elemento => (
            <Fragment key={elemento.id}>
              <div >
                <input 
                  id={elemento.id} 
                  type="radio" name='medida' 
                  value={elemento.id} 
                  onChange={ e => evaluarDatos(e)}
                  />
                <label className='ml-2 text-lg  font-bold' htmlFor={elemento.id}>{elemento.tipo}</label>
              </div>
            </Fragment>
          ))}

        </div>
      </div>

      <div className='text-center'>
      {/*Botón Calcular, deshabilitar botón de calcular mientras se está calculando*/}
        <button 
          className={`bg-teal-500 font-bold text-white text-xl px-3 py-2 rounded-lg ${ btnCalcular !== true && "hover:bg-teal-700 hover:scale-110 cursor-pointer"}  transition-all `}
          type='submit'
          
          disabled={btnCalcular === true ?? false }
        >Calcular</button>
      </div>

    </form>
  )
}

export default Formulario
