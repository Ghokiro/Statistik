//Hook creado para ahorrarse varias líneas en los demás archivos que los requiera

import { useContext } from "react";
import MedidasContext from "../Context/MedidasProvider";

const useMedidas = () => {
    return useContext(MedidasContext)
}

export default useMedidas