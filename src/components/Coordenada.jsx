import { useState ,useEffect } from "react";
import "./../styles/Laberinto.css";

function Coordenada({ coordenadaX ,coordenadaY, coordenadaXJugador ,coordenadaYJugador , final , camino }) {
    const [jugador, setJugador] = useState(true);

    useEffect(()=>{
        if(coordenadaXJugador === coordenadaX && coordenadaYJugador === coordenadaY){
            setJugador(true);
        }else{
            setJugador(false);
        }
      },[coordenadaXJugador,coordenadaYJugador]); 

      


      return (
        final ? <div className="cuadrado-final"></div> :
        jugador ? <div className="cuadrado-jugador"></div> :
        null
    );
}

export default Coordenada;