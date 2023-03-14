import logo from "./logo.svg";
import "./App.css";
// import Ejemplo1 from "./hooks/Ejemplo1";
// import Ejemplo2 from "./hooks/Ejemplo2";
// import MicomponenteConContexto from "./hooks/Ejemplo3.jsx";
import Ejemplo4 from "./hooks/Ejemplo4";
// import Greeting from "./components/pure/greeting.jsx";
// import GreetingF from  "./components/pure/greetingF.jsx"
// import TaskListComponent from "./components/container/task_list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting.jsx */}
        {/* <Greeting name="Julian"></Greeting> */}

        {/* <GreetingF name="Julian"></GreetingF> */}
        {/* Componente de ejemplo funcional */}

        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/*Ejemplo de uso de HOOKS*/}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MicomponenteConContexto></MicomponenteConContexto> */}

        <Ejemplo4 nombre="Martin">
          {/* Todo lo que hay aqui, es tratado como props.children */}
          <h3>Contenido del props.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
