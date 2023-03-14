/**
 * Ejemplo de uso del Hook useState
 *
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y, ademas poder modificarlo
 */

import React, { useState } from "react";

const Ejemplo1 = () => {
  //Valor inicial para un contador
  const valorInicial = 0;

  //Valor inicial para una persona
  const personaInicial = {
    nombre: "Martin",
    email: "julian.rico@email.com",
  };

  /**
   * Queremos que el VALORINICIAL Y PERSONAINICIAL sean
   * parte del estado del componmente para asi poder gestionar su cambio
   * y que este se vea reflejado en la vista del componente
   *
   * const [nombreVariable, funcionParaCambiar] = useState(valorInicial);
   */
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Funcion para actualizar el estado privado que contiene el contador.
   */
  const incrementarContador = () => {
    // ? funcionParaCambiar(nuevoValor);
    setContador(contador + 1);
  };

  /**
   * Funcion para actualizar el estado de persona en el componente
   */
  const actualizarPersona = () => {
    // ? funcionParaCambiar(nuevoValor);
    setPersona({
      nombre: "David",
      email: "david@email.com",
    });
  };

  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>DATOS DE LA PERSONA:</h2>
      <h3>NOMBRE: {persona.nombre}</h3>
      <h4>EMAIL: {persona.email}</h4>
      {/*Bloque de bitibes para actualizar el estado del componente */}
      <button onClick={incrementarContador}>incrementarContador</button>
      <button onClick={actualizarPersona}>actualizarPersona</button>
    </div>
  );
};

export default Ejemplo1;
