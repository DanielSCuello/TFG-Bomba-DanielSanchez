import { useState, useEffect } from "react";
import Modulo from "./Modulo.jsx";
import Mensaje from "./Mensaje.jsx";
import "./../styles/Bomba.css"; 

function Bomba(){
  const [fallado,setFallado] = useState(false);
  const [resuelto,setResuelto] = useState(false);
  const [reinicio, setReinicio] = useState(false);
  const [modulos, setModulos] = useState([
    { name: "temporizador", resuelto: false },
    { name: "cables", resuelto: false },
    { name: "laberinto", resuelto: false }
  ]);
 
  useEffect(()=>{
    if (modulos.every((modulo) => modulo.resuelto === true)) {
      setResuelto(true);
    }
  },[modulos,resuelto])


  useEffect(() => {
    console.log(resuelto); // Esto imprimirá el valor correcto
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
          <table className="tabla">
              <thead>
                  <tr>
                    <th ><Modulo tipo="temporizador" modulos={modulos}  setModulo={setModulos} setBombaFallada={setFallado} reinicio={reinicio}/></th>
                    <th ><Modulo tipo="cables" modulos={modulos}  setModulo={setModulos} setBombaFallada={setFallado} reinicio={reinicio}/></th>
                  </tr>
                  <tr>
                    <th ><Modulo tipo="laberinto" modulos={modulos}  setModulo={setModulos} setBombaFallada={setFallado} reinicio={reinicio}/></th>
                  </tr>
              </thead>
            </table>
            <div className="button-container">
              <button class="button" onClick={reiniciarBomba}>Reinicio</button>
            </div>
          </div>
      </div>
    );
}

export default Bomba;