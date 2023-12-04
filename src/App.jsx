import { useState ,useEffect} from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //Cuando se le pasa un arreglo vacio ,solo se va a ejecutar una vez
  useEffect(()=> {
    //Obtener lo que haya en Local Storage
    const obtenerLs = () => {
      const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      console.log(pacientesLs)
      setPacientes(pacientesLs);
    }
    obtenerLs();
  },[]);

  //cada que haya un cambio en pancientes que se ejecute este codigo
  useEffect( ()=> {
    localStorage.setItem('pacientes',JSON.stringify( pacientes ));
  },[pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
        setPacientes={setPacientes} 
        pacientes={pacientes} 
        paciente={paciente}
        setPaciente={setPaciente}
        
        />
        <ListadoPacientes 
         pacientes={pacientes}
         setPaciente={setPaciente}
         eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
