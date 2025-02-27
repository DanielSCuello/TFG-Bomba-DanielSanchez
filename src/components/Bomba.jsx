import { useState, useEffect } from "react";
import Modulo from "./Modulo.jsx";
import Mensaje from "./Mensaje.jsx";
import "./../styles/Bomba.css"; 
import { MODULOS_CONFIG } from "../config/config.js";

function Bomba(){
  const [fallado,setFallado] = useState(false);
  const [resuelto,setResuelto] = useState(false);
  const [reinicio, setReinicio] = useState(false);
  const [modulos, setModulos] = useState(
    Object.keys(MODULOS_CONFIG.modulos).map((name) => ({
    name,
    resuelto: false,})
  ));

  useEffect(()=>{
    if (modulos.every((modulo) => modulo.resuelto === true)) {
      setResuelto(true);
    }
  },[modulos,resuelto])

  useEffect(() => {
    console.log(resuelto); 
  }, [resuelto]);

  const reiniciarBomba = () => {
    setResuelto(false);
    setFallado(false);
    setReinicio(true); 
    setTimeout(() => {
      setReinicio(false); 
    }, 100);
  };
  
  return (
    <div className="bomba-container">
      <Mensaje resuelto={resuelto} fallado={fallado}/>
        <div className="bomba">
          <div className="modulos-grid">
            {modulos.map((modulo) => (
              <div  className={"modulo-container"}>
                <Modulo tipo={modulo.name} modulos={modulos} setModulo={setModulos} setBombaFallada={setFallado} reinicio={reinicio}/>
              </div>
            ))}
            {modulos.length%2!==0 &&<div className={"modulo-container"}/>}
          </div>
            <div className="button-container">
              <button class="button" onClick={reiniciarBomba}>Reinicio</button>
            </div>
          </div>
      </div>
    );
}

export default Bomba;