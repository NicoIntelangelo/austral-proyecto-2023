import "./BookCard.css";
import React from "react";

const BookCard = ({ children }) => {
    return <div className="book-item-container">{children}</div>;
};

export default BookCard;
