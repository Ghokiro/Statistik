import { useContext } from "react";
import MedidasContext from "../Context/MedidasProvider";

const useMedidas = () => {
    return useContext(MedidasContext)
}

export default useMedidas