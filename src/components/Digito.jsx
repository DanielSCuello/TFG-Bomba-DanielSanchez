import { useState, useEffect } from "react";
import "./../styles/Temporizador.css";

function Digito({indice ,digito , numero, setDigitos}) {

    const actualizarDigito = (indice, nuevoValor) => {
        setDigitos((prevDigitos) =>
          prevDigitos.map((digito, i) =>
            i === indice ? { ...digito, actual: nuevoValor } : digito
          )
        );
      };

    const cambioNumero = (valor) =>{
        if(valor===-1){
            return 9;
        }else if(valor === 10){
            return 0;
        }else{
            return valor;
        }
    }

  return (
    <div>
        <tr><div className="tr-boton-arr" onClick={()=>actualizarDigito(indice,cambioNumero(numero+1))}/></tr>
        <tr className="tr-digito">{numero}</tr>
        <tr><div className="tr-boton-aba" onClick={()=>actualizarDigito(indice,cambioNumero(numero-1))}/></tr>
    </div>
  );
}

export default Digito;