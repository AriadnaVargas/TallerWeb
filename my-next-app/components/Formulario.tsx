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
        <input type="text" placeholder="Nombre" name="name" className="text-gray-400 hover:text-white text-sm transition-colors" onChange={handleOnChange} />
        <input type="username" placeholder="Username" name="username" className="text-gray-400 hover:text-white text-sm transition-colors" onChange={handleOnChange} />
        <input type="age" placeholder="Age" name="age" className="text-gray-400 hover:text-white text-sm transition-colors" onChange={handleOnChange} />
        <button type="submit" className="text-gray-400 hover:text-white text-sm transition-colors">Enviar</button>
        </form>
    </div>
    <div>
        <h2>Datos ingresados:</h2>
        <ul>
        <li className="text-gray-400 hover:text-white text-sm transition-colors">Nombre2: {name}</li>
        <li className="text-gray-400 hover:text-white text-sm transition-colors">Email: {username}</li>
        <li className="text-gray-400 hover:text-white text-sm transition-colors">Edad: {age}</li>
        </ul>
    </div>
    
    </>
    )
}
