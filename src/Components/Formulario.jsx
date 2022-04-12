import {Fragment} from 'react'
import { tipoCalculo } from '../../Constants'
import useMedidas from '../Hooks/useMedidas'

import Error from './Error'

const Formulario = () => {

  const { datos, evaluarDatos, error, setError, obtenerCalculo, calculo, setSpinner, setBtnCalcular, btnCalcular } = useMedidas()


  const handleSubmit = (e) => {
    e.preventDefault()

    
    if ( Object.values(datos).includes("") ) {
      
      setError(true);
      return;
    }
    
    setError(false)  
    setSpinner(true);
    setBtnCalcular(true)
    
    setTimeout(() => {
      setBtnCalcular(false)
      setSpinner(false)
      obtenerCalculo()
    }, 3000)
      
  }
 
  return (
    <form
      className="bg-white mx-auto max-w-full sm:w-2/3 rounded-xl shadow-black shadow-xl p-5 mt-10"
      onSubmit={handleSubmit}
    >
      { error && <Error>Debes digitar los valores tipo numéricos y elegir la medida</Error>  }
      { calculo === "Error" && <Error>Solo está permitido la introducción de caracteres numéricos y símbolos de punto (para decimales) y coma (para separar los valores)</Error>  }
      <div>
        <label
            className='font-bold text-lg  block'
        >Datos:</label>
        <textarea 
            className='border-2 rounded-lg w-full px-5 py-1 text-lg font-bold resize-none transition-all focus-within:scale-y-110'
            placeholder='Introduce los datos separados por coma'
            name='texto'
            value={datos["texto"]}
            onChange={ e => evaluarDatos(e) }
        ></textarea>
      </div>

      <div className='my-4'>
        <p className='font-bold text-slate-700 mb-2'>Elije tipo de Cálculo:</p>
        <div className='flex gap-5'>
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
