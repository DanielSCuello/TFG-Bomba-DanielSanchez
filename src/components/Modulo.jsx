import { useState } from "react";
import "./../styles/Modulo.css"; 
import Temporizador from "./ModuloTemporizador.jsx"; 
import Cables from "./ModuloCables.jsx"; 

function Modulo({ tipo }) {
  const [resuelto, setResuelto] = useState(false);
  const [fallado, setFallado] = useState(false);
  
  

  return (
    <div className="modulo">
      <div className={fallado? "luz-roj" : resuelto ? "luz-ver" : `luz-apa`}/>
      {tipo === "temporizador" && <Temporizador inicialMinutos={5} setResuelto={setResuelto} fallado={fallado} setFallado={setFallado} />}
      {tipo === "cables" && <Cables setResuelto={setResuelto} fallado={fallado} setFallado={setFallado} />}
    </div>
  );
}

export default Modulo;

