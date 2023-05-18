import { useState } from "react";
import "./App.css";

import NewBook from "./components/NewBook/NewBook";
import Books from "./components/books/Books";
import BooksFilter from "./components/bookFilter/BookFilter";
import TableForm from "./components/Ejercicios/ej1/TableForm";
import SendingForm from "./components/Ejercicios/ej2/SendingForm";
import Login from "./components/Ejercicios/ej3/Login";

const BOOKS = [
    {
        id: 1,
        title: "100 años de soledad",
        author: "Gabriel García Marquez",
        dateRead: new Date(2021, 8, 12),
        pageCount: 410,
    },
    {
        id: 2,
        title: "Todos los fuegos el fuego",
        author: "Julio Cortazar",
        dateRead: new Date(2020, 6, 11),
        pageCount: 197,
    },
    {
        id: 3,
        title: "Asesinato en el Orient Express",
        author: "Agatha Christie",
        dateRead: new Date(2021, 5, 9),
        pageCount: 256,
    },
    {
        id: 4,
        title: "Las dos torres",
        author: "J.R.R Tolkien",
        dateRead: new Date(2020, 3, 22),
        pageCount: 352,
    },
];

const App = () => {
    const [books, setBooks] = useState(BOOKS); ///aprenderse sintaxis examen
    const [year, setYear] = useState("2021"); //2021

    const addBookHandler = (book) => {
        const newBookArray = [book, ...books];
        setBooks(newBookArray);
    };

    const reciveYearBooks = (year) => {
        setYear(year);
    };

    return (
        <div className="container">
            <h1>Books Champion App!</h1>
            <p>¡Quiero leer libros!</p>
            <NewBook onBookAdded={addBookHandler} />
            <BooksFilter onYearChange={reciveYearBooks} />
            <Books books={books} yearSelect={year} />
            <TableForm />
            <SendingForm />
            <Login />
        </div>
    );
};

export default App;
