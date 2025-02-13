import { useState, useEffect } from "react";
import Modulo from "./Modulo.jsx";
import "./../styles/Bomba.css"; 



function Bomba(){
  const [reinicio, setReinicio] = useState(false);
  const modulos=[
    {name:"temporizador"},
    {name:"cables"},
  ]

  const reiniciarBomba = () => {
    setReinicio(true); 
  
    setTimeout(() => {
      setReinicio(false); 
    }, 2000);
  };

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
        <button class="button" onClick={reiniciarBomba}>Reinicio</button>
      </div>
    );
}

export default Bomba;