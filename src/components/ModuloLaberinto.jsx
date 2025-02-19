import { useState, useEffect } from "react";
import "./../styles/Laberinto.css";
import { CABLES_CONFIG } from "../config/config.js";
import Coordenada from "./Coordenada.jsx";

function Laberinto({}) {
    const[principio,setPrincipio]=useState({x:0,y:1});
    const[posicionJugador,setPosicionJugador]=useState({x:null,y:null});
    const[final,setFinal]=useState({x:2,y:1});
    const size=4;

  /*  useEffect(()=>{
        setPosicionJugador(principio);
    },[]); */

    return (
      <div className="contenedor-tablas">
        <table className="tabla-laberinto">
            <thead>
            {[...Array(size)].map((_, x) => (
                <tr key={x}>
                    {[...Array(size)].map((_, y) => (
                        <td>
                            <Coordenada coordenadaX={x} coordenadaY={y} coordenadaXJugador={posicionJugador.x} coordenadaYJugador={posicionJugador.y}/>
                        </td>
                    ))}
                </tr>
            ))}
          </thead>
        </table>
        <table class="tabla-boton">
            <tr>
                <td rowspan="2"><div className="boton-izquierda"/></td> 
                <td><div className="boton-arriba"/></td> 
                <td rowspan="2"><div className="boton-derecha"/></td> 
            </tr>
            <tr>
                <td><div className="boton-abajo"/></td> 
            </tr>
        </table>
      </div>
    );
  }
  
  export default Laberinto;