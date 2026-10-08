import {useState} from "react";

// @ts-nocheck
export default function Formulario() {
    
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Nombre:", name);
        console.log("Email:", username);
        console.log("Edad:", age);
        
    }

    return(
    <>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Email" />
        <button type="submit">Enviar</button>
        </form>
        <ul>
        <li>Nombre: {name}</li>
        <li>Email: {username}</li>
        <li>Edad: {age}</li>
        </ul>
    </>
    )
}
