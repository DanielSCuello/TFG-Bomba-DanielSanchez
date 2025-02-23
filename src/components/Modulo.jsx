import { useEffect, useState } from "react";
import "./../styles/Modulo.css"; 
import Temporizador from "./ModuloTemporizador.jsx"; 
import Cables from "./ModuloCables.jsx"; 
import Laberinto from "./ModuloLaberinto.jsx"; 

function Modulo({ tipo,modulos,setModulo ,reinicio}) {
  const [resuelto, setResuelto] = useState(false);
  const [fallado, setFallado] = useState(false);

  useEffect(() => {
      setModulo((prevModulos) =>
        prevModulos.map((modulo) =>
          modulo.name === tipo ? resuelto ? { ...modulo, resuelto: true } : modulo : modulo
        )
      );
    },[resuelto]);
  
  //if (modulos.some((modulo) => modulo.name === tipo)) 
  useEffect(()=>{
    setResuelto(false);
    setFallado(false);
  },[reinicio])

  return (
    <div className="modulo">
      <div className={fallado ? "luz-roj" : resuelto ? "luz-ver" : "luz-apa"}/>
        {tipo === "temporizador" && <Temporizador inicialMinutos={5} setResuelto={setResuelto} fallado={fallado} setFallado={setFallado} reinicio={reinicio}/>}
        {tipo === "cables" && <Cables setResuelto={setResuelto} fallado={fallado} setFallado={setFallado} reinicio={reinicio}/>}
        {tipo === "laberinto" && <Laberinto setResuelto={setResuelto} fallado={fallado} setFallado={setFallado} reinicio={reinicio}/>}
    </div>
  );
}

export default Modulo;

