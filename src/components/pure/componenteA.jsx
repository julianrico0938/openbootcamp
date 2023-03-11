import React, { useState } from "react";
import PropTypes from "prop-types";

const Contacto = ({ conectadoP, nombre, apellido, email }) => {

  const [conectado, setConectado] = useState(conectadoP);

  const cambiarEstado = () => {
    setConectado(!conectado);
  }

  return (
    <div>
      <h2>
        {nombre} {apellido}
      </h2>
      <p>{email}</p>
      <p>{conectado ? "Contacto En Línea" : "Contacto No Disponible"}</p>
      <button onClick={cambiarEstado}>Cambiar Estado</button>
    </div>
  );
};

Contacto.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  };

export default Contacto;
