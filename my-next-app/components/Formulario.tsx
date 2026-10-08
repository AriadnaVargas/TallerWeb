'use client';
import {useState} from "react";

// @ts-nocheck
export default function Formulario() {
    
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
    function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!username || !name || !age) {
            alert("Por favor, complete todos los campos.");
            return;
        } else if (isNaN(Number(age)) || Number(age) < 0) { 
            alert("Por favor, ingrese una edad válida.");
            return;
        }
        console.log("Nombre:", name);
        console.log("Email:", username);
        console.log("Edad:", age);
        
    }

    function handleOnChange(event:React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        if (name === "username") {
            setUsername(value);
        } else if (name === "name") {
            setName(value);
        } else if (name === "age") {
            setAge(value);
        }
    }

    

    return(
    <>
    <div>
        <h1>Formulario</h1>
    </div>
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" name="name" onChange={handleOnChange} />
        <input type="username" placeholder="Username" name="username" onChange={handleOnChange} />
        <input type="age" placeholder="Age" name="age" onChange={handleOnChange} />
        <button type="submit">Enviar</button>
        </form>
    </div>
    <div>
        <h2>Datos ingresados:</h2>
        <ul>
        <li>Nombre2: {name}</li>
        <li>Email: {username}</li>
        <li>Edad: {age}</li>
        </ul>
    </div>
    
    </>
    )
}
