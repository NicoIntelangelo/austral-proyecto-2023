import React from "react";

const SendingRadio = ({ shippingMethod }) => {
    const changeEnvioHandler = (event) => {
        shippingMethod(event.target.value);
    };

    return (
        <div>
            <select onChange={changeEnvioHandler}>
                <option value="">Metodo de envío</option>
                <option value="1">Local</option>
                <option value="2">Express</option>
                <option value="2">Común</option>
            </select>
        </div>
    );
};

export default SendingRadio;
