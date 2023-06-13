import React from "react";

const TableInput = ({ onInputChange, patas }) => {
    const changeInputHandler = (event) => {
        onInputChange(event.target.value);
    };

    return (
        <div>
            <label>Cantidad de patas</label>
            <input onChange={changeInputHandler} value={patas} type="number" />
        </div>
    );
};

export default TableInput;
