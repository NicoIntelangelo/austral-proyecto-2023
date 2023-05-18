import React, { useState } from "react";

const Login = () => {
    const [name, setName] = useState("");

    const changeNameHandler = (event) => {
        const inputname = event.target.value;
        if (inputname.includes("o")) {
            setName(inputname.slice(0, name.length - 1)); //
            window.alert("Por favor, ¡Nombres de usuario sin la letra o!");
        }
        //setName(inputname);
    };

    // if (name.includes("o")) {
    //     window.alert("Por favor, ¡Nombres de usuario sin la letra o!");
    //     setName(name.slice(0, name.length - 1));
    // }

    const registroCorrecto = () => {
        if (name.length <= 0 || name.includes("o", "O")) {
            window.alert("usuario incorrecto");
        } else {
            window.alert("usuario creado");
        }
    };

    return (
        <div>
            <label>Nombre</label>
            <input onChange={changeNameHandler} value={name} type="text" />
            <p>{name}</p> !!!interpolacion
            <div>
                <button onClick={registroCorrecto}>enviar</button>
            </div>
        </div>
    );
};

export default Login;
//window.alert("Pareces indeciso");
