import { MedidasProvider } from './Context/MedidasProvider'
import Formulario from "./Components/Formulario"
import Contenido from './Components/Contenido'
import Header from './Components/Header'


function App() {

  return (
    <MedidasProvider>
      <Header />
      <Formulario />
      <Contenido />
    </MedidasProvider>
  )
}

export default App
