import { useState } from "react";
import "./../styles/Laberinto.css";

function Coordenada({ coordenadaX ,coordenadaY, coordenadaXJugador ,coordenadaYJugador }) {
    const [jugador, setJugador] = useState(true);
    const [final , setFinal] =useState(false);

   /* useEffect(()=>{
        if(coordenadaXJugador === coordenadaX && coordenadaYJugador === coordenadaY){
            setJugador(true);
        }else{
            setJugador(false);
        }
      },[coordenadaXJugador,coordenadaYJugador]); */


      return jugador ? <div className="cuadrado"></div> : null;
}

export default Coordenada;