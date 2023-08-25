import About from "./componentes/About";
import Contacto from "./componentes/Contacto";
import Habilidades from "./componentes/Habilidades";
import Inicio from "./componentes/Inicio";
import NavBar from "./componentes/NavBar";
import Trabajos from "./componentes/Trabajos";


 

function App() {
  return (
    <div>
      <NavBar />
      <Inicio />
      <About />
      <Habilidades />
      <Trabajos />
      <Contacto />
    </div>
  )
}

export default App;
