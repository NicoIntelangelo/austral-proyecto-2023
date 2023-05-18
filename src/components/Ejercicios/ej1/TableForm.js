import React, { useState } from "react";
import TableInput from "./TableInput";

const TableForm = () => {
    const [patas, SetPatas] = useState("");

    const onInputChange = (pata) => {
        SetPatas(pata);
    };

    return (
        <div>
            <TableInput onInputChange={onInputChange} patas={patas} />
            {patas !== "" ? (
                <p>
                    {patas === "4" ? (
                        <p>Mesa correcta</p>
                    ) : (
                        <p>Mesa Inestable</p>
                    )}
                </p>
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default TableForm;
