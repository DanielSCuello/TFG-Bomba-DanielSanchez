import { useEffect, useState } from "react";
import "./../styles/Modulo.css"; 
import Temporizador from "./ModuloTemporizador.jsx"; 
import Cables from "./ModuloCables.jsx"; 
import Laberinto from "./ModuloLaberinto.jsx"; 

function Modulo({ tipo ,reinicio}) {
  const [resuelto, setResuelto] = useState(false);
  const [fallado, setFallado] = useState(false);
  
  useEffect(()=>{
    setResuelto(false);
    setFallado(false);
  },[reinicio])

  return (
    <div className="modulo">
      <div className={fallado? "luz-roj" : resuelto ? "luz-ver" : `luz-apa`}/>
      {tipo === "temporizador" && <Temporizador inicialMinutos={5} setResuelto={setResuelto} fallado={fallado} setFallado={setFallado} reinicio={reinicio}/>}
      {tipo === "cables" && <Cables setResuelto={setResuelto} fallado={fallado} setFallado={setFallado} reinicio={reinicio}/>}
      {tipo === "laberinto" && <Laberinto setResuelto={setResuelto} fallado={fallado} setFallado={setFallado} reinicio={reinicio}/>}
    </div>
  );
}

export default Modulo;

