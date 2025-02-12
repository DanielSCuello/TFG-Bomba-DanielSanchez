import { useState, useEffect } from "react";
import Modulo from "./Modulo.jsx";
import "./../styles/Bomba.css"; 



function Bomba(){
  const modulos=[
    {name:"temporizador"},
    {name:"cables"},
  ]
    return (
        <div className="tabla-container" >
          <table className="tabla">
            <thead>
              <tr>
                <th><Modulo tipo="temporizador" /></th>
                <th><Modulo tipo="cables" /></th>
              </tr>
            </thead>
          </table>
        </div>
    );
}

export default Bomba;