import { useState, useEffect } from "react";
import "./../styles/Temporizador.css"; 

function Temporizador({ inicialMinutos }) {
  const [minutos, setMinutos] = useState(inicialMinutos);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (minutos === 0 && segundos === 0) {
        setMinutos(5);
        clearInterval(intervalo);
      } else if (segundos === 0) {
        setMinutos((prev) => prev - 1);
        setSegundos(59);
      } else {
        setSegundos((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [minutos, segundos]);

  return (
    <div>
      <h3>{minutos} : {segundos}</h3>
    </div>
  );
}

export default Temporizador;