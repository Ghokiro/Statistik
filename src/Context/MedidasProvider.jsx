import { createContext, useState } from "react";
import { fnMedia, fnMediana } from "../Helpers";

const MedidasContext = createContext()

const MedidasProvider = ({children}) => {

    const [ datos, setDatos ] = useState({
        texto: '',
        medida: ''

    }) 
    const [ error, setError ] = useState(false);
    const [ calculo, setCalculo ] = useState("")
    const [ spinner, setSpinner] = useState(false)
    const [ btnCalcular, setBtnCalcular] = useState(false)

    const obtenerCalculo = () => {
        const {texto, medida} = datos;

        if ( medida === "1") {
            setCalculo(fnMedia(texto))
            return;
        }

        setCalculo(fnMediana(texto))
       
    }


    const evaluarDatos = ( value ) => {
        
        setDatos({
            ...datos,
            [value.target.name] : value.target.value

        })
       
    }

    return (
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
                setBtnCalcular
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