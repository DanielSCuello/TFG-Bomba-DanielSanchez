import { useState } from "react";
import "./../styles/Modulo.css"; 
import Temporizador from "./ModuloTemporizador.jsx"; 
import Cables from "./ModuloCables.jsx"; 

function Modulo({ tipo }) {
  const [resuelto, setResuelto] = useState(false);
  return (
    <div className="modulo">
      <div className={resuelto ? "luz-ver" : `luz-apa`}/>
      {tipo === "temporizador" && <Temporizador inicialMinutos={5} setResuelto={setResuelto} />}
      {tipo === "cables" && <Cables setResuelto={setResuelto}/>}
    </div>
  );
}

export default Modulo;

