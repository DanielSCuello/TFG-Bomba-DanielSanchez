import { useState, useEffect } from "react";
import "./../styles/Laberinto.css";
import { LABERINTO_CONFIG } from "../config/config.js";
import Coordenada from "./Coordenada.jsx";

function Laberinto({setResuelto , fallado ,setFallado , reinicio}) {
    const[principio,setPrincipio]=useState({x:0,y:0});
    const[posicionJugador,setPosicionJugador]=useState({x:null,y:null});
    const[final,setFinal]=useState({x:0,y:1});
    const [caminos, setCamino] = useState([
        {x:0,y:0},
        {x:1,y:0},
        {x:1,y:1},
        {x:2,y:1},
        {x:2,y:2},
        {x:3,y:2},
        final,
    ]);
    
    const size=4;

    useEffect(()=>{
        setPosicionJugador(principio);
    },[]); 

    useEffect(()=>{
        setPosicionJugador(principio);
    },[reinicio]); 

    useEffect(()=>{
        if(posicionJugador.x=== final.x && posicionJugador.y === final.y){
            setResuelto(true);
        }
    },[posicionJugador]); 

    useEffect(() => {
        const esCamino = caminos.some(camino => camino.x === posicionJugador.x && camino.y === posicionJugador.y);
        setFallado(!esCamino);
    }, [posicionJugador]); 

    const moveDerecha = () => {
        if(posicionJugador.x<size-1 && !fallado){
            setPosicionJugador(prev => ({ ...prev,  x:prev.x + 1 }));
        }
    }

    const moveIzquierda = () => {
        if(posicionJugador.x>0 && !fallado){
            setPosicionJugador(prev => ({ ...prev,  x:prev.x - 1 }));
        }
    }

    const moveArriba = () => {
        if(posicionJugador.y>0 && !fallado){
            setPosicionJugador(prev => ({ ...prev,  y:prev.y - 1 }));
        }
    }

    const moveAbajo = () => {
        if(posicionJugador.y<size-1 && !fallado ){
            setPosicionJugador(prev => ({ ...prev,  y:prev.y + 1 }));
        }
    }

    return (
      <div className="contenedor-tablas">
        <table className="tabla-laberinto">
            <thead>
            {[...Array(size)].map((_, y) => (
                <tr key={y}>
                    {[...Array(size)].map((_, x) => (
                        <td>
                            <Coordenada coordenadaX={x} coordenadaY={y} coordenadaXJugador={posicionJugador.x} coordenadaYJugador={posicionJugador.y} final={final.x===x && final.y===y} />
                        </td>
                    ))}
                </tr>
            ))}
          </thead>
        </table>
        <table class="tabla-boton">
            <tr>
                <td rowspan="2"><div className="boton-izquierda" onClick={moveIzquierda}/></td> 
                <td><div className="boton-arriba"  onClick={moveArriba}/></td> 
                <td rowspan="2"><div className="boton-derecha" onClick={moveDerecha}/></td> 
            </tr>
            <tr>
                <td><div className="boton-abajo" onClick={moveAbajo}/></td> 
            </tr>
        </table>
      </div>
    );
  }
  
  export default Laberinto;