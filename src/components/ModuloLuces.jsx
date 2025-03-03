import { useState ,useEffect } from "react";
import "./../styles/Luces.css";
import LedIndicator from "./Led.jsx";
import { MODULOS_CONFIG } from "../config/config.js";

function Luces({setResuelto , fallado ,setFallado , reinicio}) {
  const[ordenNumero,setOrdenNumero]=useState(0);
  const[ordenDisplay,setOrdenDisplay]=useState(0);
  const [animation, setAnimation] = useState("");
  const [colores, setColores] = useState(
    Object.values(MODULOS_CONFIG.modulos.luces.colores).map((colores) => ({
      ...colores,
    }))
  );

  const [ordenBotones, setOrdenBotones] = useState(
          Object.values(MODULOS_CONFIG.modulos.luces.orden).map((paso) => ({
            ...paso,
            pulsado: false,
          }))
  );

  const onClick = (color) => {
    let colorOrden = ordenBotones[ordenNumero]?.color
    if(obtenerColorOrden(colorOrden) === color && !fallado){
      setOrdenNumero(ordenNumero+1);
      actualizarPaso(ordenNumero)
      console.log(ordenBotones);
    }
    else{
      setFallado(true)
    }
  }

  const obtenerColorOrden = (colorBuscado) => {
    const colorEncontrado = colores.find((item) => item.color === colorBuscado);
    console.log(colorEncontrado.colorOrden);
    return colorEncontrado ? colorEncontrado.colorOrden : null;
  };

  const actualizarPaso = (indice) => {
    setOrdenBotones((prevOrden) =>
      prevOrden.map((paso, i) =>
        i === indice ? { ...paso, pulsado: true } : paso
      )
    );
  };

  useEffect(() => {
    if (ordenBotones.every(boton => boton.pulsado)) {
      setResuelto(true);
      console.log("Esta resuelto modulo botones");
    }
  }, [ordenBotones]);

  useEffect(() => {
    setOrdenBotones((ordenBotones) =>
        ordenBotones.map((paso) => {
          return { ...paso, pulsado: false };
        })
    );
    setOrdenNumero(0);
    console.log(ordenBotones);
  }, [reinicio]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrdenDisplay(prevOrdenDisplay => {
        if (ordenBotones.length > prevOrdenDisplay) {
          setAnimation(ordenBotones[prevOrdenDisplay]?.color); 
          return prevOrdenDisplay + 1;
        } else {
          setAnimation("");
          return 0; 
        }
      });
    }, 3000); 
  
    return () => clearInterval(interval); 
  }, [ordenBotones]); 
  
  return (
    <div class="container-luces">
            <LedIndicator animation={animation} />
        <div class="container-botones">
          <div class="boton-roj" onClick={() => onClick("roj")}/>
          <div class="boton-azu" onClick={() => onClick("azu")}/>
          <div class="boton-ama" onClick={() => onClick("ama")}/>
          <div class="boton-ver" onClick={() => onClick("ver")}/>
        </div>
    </div>
  );
}

export default Luces;