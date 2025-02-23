import { useState, useEffect } from "react";
import Modulo from "./Modulo.jsx";
import "./../styles/Bomba.css"; 



function Bomba(){
  const [resuelto,setResuelto] = useState(false);
  const [reinicio, setReinicio] = useState(false);
  const [modulos, setModulos] = useState([
    { name: "temporizador", resuelto: false },
    { name: "cables", resuelto: false },
    { name: "laberinto", resuelto: false }
  ]);
 
  useEffect(()=>{
    if (modulos.every((modulo) => modulo.resuelto === true)) {
      console.log("hola")
    }
  },[modulos])

  const reiniciarBomba = () => {
    setReinicio(true); 
    setTimeout(() => {
      setReinicio(false); 
    }, 100);
  };

  return (
    <div className="tabla-container">
       <table className="tabla">
          <thead>
              <tr>
                <th ><Modulo tipo="temporizador" modulos={modulos} setModulo={setModulos} reinicio={reinicio}/></th>
                <th ><Modulo tipo="cables" modulos={modulos}  setModulo={setModulos} reinicio={reinicio}/></th>
              </tr>
              <tr>
                <th ><Modulo tipo="laberinto" modulos={modulos}  setModulo={setModulos} reinicio={reinicio}/></th>
              </tr>
          </thead>
        </table>
        <div className="button-container">
          <button class="button" onClick={reiniciarBomba}>Reinicio</button>
        </div>
      </div>
      
    );
}

export default Bomba;