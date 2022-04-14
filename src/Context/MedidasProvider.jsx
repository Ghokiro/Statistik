import { createContext, useState } from "react";
import { fnMedia, fnMediana, fnModa } from "../Helpers";

const MedidasContext = createContext()

const MedidasProvider = ({children}) => {
    //hooks de useState
    const [ datos, setDatos ] = useState({
        texto: '',
        medida: ''

    }) 
    const [ error, setError ] = useState(false);
    const [ calculo, setCalculo ] = useState("")
    const [ spinner, setSpinner] = useState(false)
    const [ btnCalcular, setBtnCalcular] = useState(false)
    const [ tipoMedida, setTipoMedida ] = useState("") 

    //Selecciona típo de medida
    const obtenerCalculo = () => {
        const {texto, medida} = datos;

        if ( medida === "1") {
            //almacena los valores numéricos en el hook para luego realizar los cálculos
            setCalculo(fnMedia(texto))
            //Nombre de típo de medida para presentarlo en la web
            setTipoMedida("Media:")
            return;
        }
        if ( medida === "2" ) {
            setCalculo(fnMediana(texto))
            setTipoMedida("Mediana:")
            return;
        }
        setCalculo(fnModa(texto))
        setTipoMedida("Moda:")
    }


    const evaluarDatos = ( value ) => {
        //Almacenar datos en el objecto del hook de Datos
        setDatos({
            ...datos,
            [value.target.name] : value.target.value

        })
       
    }

    return (
        //Contenedor que exporta todos los hooks y funciones creados en este archivo
        <MedidasContext.Provider
            value={{
                datos, 
                evaluarDatos,
                error,
                setError,
                calculo,
                obtenerCalculo,
                spinner,
                setSpinner,
                btnCalcular,
                setBtnCalcular,
                setTipoMedida,
                tipoMedida
            }}
        >
            {children}
        </MedidasContext.Provider>
    )
}

export {
    MedidasProvider
}

export default MedidasContext