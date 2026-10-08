'use client';
import {useState} from "react";

// @ts-nocheck
export default function Generador() {
    
    const [length, setLength] = useState("");
    const [upper, setUpper] = useState(false);
    const [lower, setLower] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [password, setPassword] = useState("");
    
    function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const password = generatePassword(Number(length), upper, lower, number, symbol);
        setPassword(password);
    }

    function handleOnChange(event:React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = event.target;
        if (type === "checkbox") {
            if (name === "upper") {
                setUpper(checked);
            } else if (name === "lower") {
                setLower(checked);
            } else if (name === "number") {
                setNumber(checked);
            } else if (name === "symbol") {
                setSymbol(checked);
            }
        } else if (type === "text") {
            if (name === "length") {
                setLength(value);
            }
        }
    }

    function generatePassword(length:number, upper:boolean, lower:boolean, number:boolean, symbol:boolean):string {
        const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
        let password = "";
        const chars = (upper ? upperChars : "") + (lower ? lowerChars : "") + (number ? numberChars : "") + (symbol ? symbolChars : "");
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }

    return(
    <>
    <div>
        <h1>Generador de Contraseñas</h1>
    </div>
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="length">Length:</label>
        <input type="text" placeholder="Length" name="length" onChange={handleOnChange} />
        <label htmlFor="upper">Upper:</label>
        <input type="checkbox" placeholder="Upper" name="upper" onChange={handleOnChange} />
        <label htmlFor="lower">Lower:</label>
        <input type="checkbox" placeholder="Lower" name="lower" onChange={handleOnChange} />
        <label htmlFor="number">Number:</label>
        <input type="checkbox" placeholder="Number" name="number" onChange={handleOnChange} />
        <label htmlFor="symbol">Symbol:</label>
        <input type="checkbox" placeholder="Symbol" name="symbol" onChange={handleOnChange} />
        <button type="submit">Enviar</button>
        </form>
    </div>
    <div>
        <label>
            Contraseña generada:{password}    
        </label>    
        <button onClick={() => navigator.clipboard.writeText(password)}>Copiar</button>
    </div>    
    </>
    )
}
