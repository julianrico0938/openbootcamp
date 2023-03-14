/**
 * Ejemplo Hooks:
 * -- useState();
 * -- useContext();
 */

import React, { useState, useContext } from "react";

/**
 *
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {
  //Inicializamos un estado vacio que va a rellebarse con los
  //datos del contexto padre
  const state = useContext(miContexto);

  return (
    <div>
      <h1>El TOKEN es: {state.token}</h1>
      {/* Pintamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>La sesión es: {state.sesion}</h2>
    </div>
  );
};

const MicomponenteConContexto = () => {
  const estadoInicial = {
    token: "1234567",
    sesion: 1,
  };

  //Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  const actualizarSesion = () => {
    setSessionData({
      token: "JWT123456789",
      sesion: sessionData.sesion + 1,
    });
  };
  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que este aqui dentro puede leer los datos de sessionData */}
      {/* Ademas, si se actualiza los componentes de aqui, tambien lo actualiza */}
      <h1>*** Ejemplo de useState() y useContext()</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  );
};

export default MicomponenteConContexto;
