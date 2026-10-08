'use client';
import {useState} from "react";

// @ts-nocheck
export default function Timer() {
    
    const [time, setTime] = useState(0);

    function handleSubmit(event:React.MouseEvent<HTMLButtonElement>) {
       event.preventDefault();
         const fechaInput = document.getElementById("fecha") as HTMLInputElement;
        if (fechaInput && fechaInput.value) {
            const fecha = new Date(fechaInput.value);
            const tiempoRestante = calcularTiempo(fecha);
            setTime(Number(tiempoRestante));
        }
    }


    function calcularTiempo(fecha:Date):string {
        const ahora = new Date();
        const diferencia = fecha.getTime() - ahora.getTime();
        return Math.floor(diferencia / 1000).toString();        
    }

    return(
    <>
    <div>
        <h1>Timer</h1>
    </div>
    <div>
        <label htmlFor="fecha">Ingrese una fecha y hora:</label>
        <label >Time: {time}</label>        
        <button type="button" className="bg-green-700" onClick={handleSubmit}>start</button>
        <button type="button" className="bg-yellow-400" onClick={handleSubmit}>reset</button>
        <button type="button" className="bg-red-600" onClick={handleSubmit}>stop</button>
    </div>
    <div>
        
    </div>    
    </>
    )
}
