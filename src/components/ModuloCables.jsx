import { useState, useEffect } from "react";
import "./../styles/Cables.css";
import Cable from "./Cable.jsx";

function Cables({setResuelto , fallado ,setFallado , reinicio}) {
  const[orden,setOrden]=useState(1);
  const [cables, setCables] = useState([
    { color: "roj", cortado: false , orden:1},
    { color: "azu", cortado: false , orden:2},
    { color: "ama", cortado: false , orden:3},
    { color: "ver", cortado: false , orden:4}
  ]);
  

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

  useEffect(() => {
    if (cables.every(cable => cable.cortado)) {
      setResuelto(true);
      console.log("Esta resuelto");
    }
  }, [cables]);

  useEffect(() => {
    setCables(cables => cables.map(cable => {
      console.log(`${cable.color} reiniciado`); 
      return { ...cable, cortado: false }; 
    })
  );
  setOrden(1); 
  }, [reinicio]);

  return (
    <div className="cables-container">
      {cables.map((cable, index) => (
        <Cable key={index} color={cable.color} cortado={cable.cortado} onCortar={() => cortarCable(cable.color)}/>
      ))}
    </div>
  );
}

export default Cables;


