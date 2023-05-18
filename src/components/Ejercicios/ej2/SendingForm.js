import React, { useState } from "react";
import SendingRadio from "./SendingRadio";

const SendingForm = () => {
    const [method, setMethod] = useState("");

    const shippingMethod = (method) => {
        setMethod(method);
    };
    return (
        <div>
            <SendingRadio shippingMethod={shippingMethod} />
            <p>
                {(() => {
                    switch (method) {
                        case "1":
                            return <p>No tendra recargo</p>;
                        case "2":
                            return <p>tendra recargo</p>;
                        default:
                            return <p>Elija un metodo de envío</p>;
                    }
                })()}
            </p>
        </div>
    );
};

export default SendingForm;
//{method === "1" ? <p>No hay Recargo</p> : <p>Tendra Recargo</p>}
