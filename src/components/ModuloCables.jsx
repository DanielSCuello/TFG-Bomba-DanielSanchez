import { useState, useEffect } from "react";
import "./../styles/Cables.css";
import Cable from "./Cable.jsx";
import { CABLES_CONFIG } from "../config/config.js";

function Cables({setResuelto , fallado ,setFallado , reinicio}) {
  const[orden,setOrden]=useState(1);
  const [cables, setCables] = useState(
    Object.values(CABLES_CONFIG).map((cable) => ({
      ...cable,
      cortado: false,
    }))
  );
  

  const cortarCable = (color) => {
    setCables((prevCables) =>
      prevCables.map((cable) =>{
        if (cable.color === color && !fallado) {
          ordenCables(cable)
          return { ...cable, cortado: true }; 
        }
        return cable
      })
    );
  };

  const ordenCables = (cable) => {
    setOrden(orden+1)
    if (orden !== cable.orden) {
      setFallado(true);
    }
  };

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() })) 
      .sort((a, b) => a.sort - b.sort) 
      .map(({ item }) => item); 
  };

  useEffect(() => {
    if (cables.every(cable => cable.cortado)) {
      setResuelto(true);
      console.log("Esta resuelto");
    }
  }, [cables]);

  useEffect(() => {
    setCables((cables) =>
      shuffleArray(
        cables.map((cable) => {
          console.log(`${cable.color} reiniciado`);
          return { ...cable, cortado: false };
        })
      )
    );
    setOrden(1);
  }, [reinicio]);

  return (
    <div className="cables-container">
      {cables.map((cable) => (
        <Cable  color={cable.color} cortado={cable.cortado} onCortar={() => cortarCable(cable.color)}/>
      ))}
    </div>
  );
}

export default Cables;


