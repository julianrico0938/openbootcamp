import React from "react";
import Contacto from "./components/pure/componenteA.jsx";

const renderComponenteB = () => {
    return (
        <div>
            <Contacto
              nombre="Julian"
              apellido="Rico"
              email="Julian.rico@example.com"
              conectado={true}
            />
        </div>
      );
}

export default renderComponenteB;