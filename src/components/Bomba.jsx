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
    }, 100);
  };

  return (
    <div className="tabla-container" >
       <table className="tabla">
          <thead>
             <tr>
                <th><Modulo tipo="temporizador" reinicio={reinicio}/></th>
                <th><Modulo tipo="cables" reinicio={reinicio}/></th>
              </tr>
          </thead>
        </table>
        <button class="button" onClick={reiniciarBomba}>Reinicio</button>
      </div>
    );
}

export default Bomba;