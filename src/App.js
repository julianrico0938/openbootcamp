import logo from "./logo.svg";
import "./App.css";
// import Greeting from "./components/pure/greeting.jsx";
// import GreetingF from  "./components/pure/greetingF.jsx"
// import TaskListComponent from "./components/container/task_list";
import Contacto from "./components/pure/componenteA.jsx";

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

        {/* Componentes ejercicio sesiones 1, 2 y 3 */}
        <Contacto
          nombre="Julian"
          apellido="Rico"
          email="Julian.rico@example.com"
          conectado={true}
        ></Contacto>
      </header>
    </div>
  );
}

export default App;

