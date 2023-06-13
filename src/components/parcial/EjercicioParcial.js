import React, { useState } from "react";

const EjercicioParcial = () => {
    const [edad, setEdad] = useState("");
    const [apellido, setApellido] = useState("");
    const [registro, setRegistro] = useState(false);

    const apellidoHandler = (event) => {
        setApellido(event.target.value);
    };
    const edadHandler = (event) => {
        setEdad(event.target.value);
    };

    const registroHandler = () => {
        setRegistro(true);
    };

    return (
        <div>
            <h2>Otto Jueves</h2>
            <label>Apellido</label>
            <input onChange={apellidoHandler} value={apellido} type="text" />
            <label>Edad</label>
            <input onChange={edadHandler} value={edad} type="number" />
            <div>
                <button onClick={registroHandler}>Solicitar entrada</button>
            </div>
            {registro === true ? (
                <p>
                    {edad >= 18 && apellido !== "Golzman" ? (
                        <p>Puede Ingresar</p>
                    ) : (
                        <p>No puede Ingresar</p>
                    )}
                </p>
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default EjercicioParcial;
