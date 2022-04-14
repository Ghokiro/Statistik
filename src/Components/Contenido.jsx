import { useEffect, useContext } from "react"
import useMedidas from "../Hooks/useMedidas"
import Spinner from "./Spinner.jsx"
import Error from "./Error.jsx"

//Muestra el resultado
const Contenido = () => {

  const { calculo, spinner, tipoMedida } = useMedidas()
  
  return (
    //Si no existen errores, ejecutar todo
    calculo !== "Error" &&
    //Mostrar ícono de carga mientras se calcula la media
      spinner === true ? 
        <Spinner /> :
          <div className="bg-white mx-auto max-w-full sm:w-2/3 rounded-xl shadow-black shadow-xl p-5 mt-10">
            <h1 className="font-bold text-xl uppercase text-gray-700 text-center">
              { tipoMedida ? tipoMedida : "Resultado" }</h1>
              <p className="text-center">{calculo}</p> 
          </div>
    
  )
}

export default Contenido