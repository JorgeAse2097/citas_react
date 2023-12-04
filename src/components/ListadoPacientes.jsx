import Paciente from "./Paciente";

//map itera en un arreglo y retorna uno nuevo

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">listado pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      { pacientes.map( (paciente)=> 
      //se va a generar un componente por cada uno de los elementos
       <Paciente
       key={paciente.id}
       paciente={paciente}
       setPaciente={setPaciente}
       eliminarPaciente={eliminarPaciente}
       />
      )}
      
    

    </div>
  );
};

export default ListadoPacientes;
