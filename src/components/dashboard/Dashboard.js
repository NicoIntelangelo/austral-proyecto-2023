import { useEffect, useState } from "react";
import React from "react";

import NewBook from "../NewBook/NewBook";
import BooksFilter from "../bookFilter/BookFilter";
import Books from "../books/Books";
const BOOKS = [];

const Dashboard = () => {
    const [books, setBooks] = useState(BOOKS);
    const [yearFiltered, setYearFiltered] = useState("2023");

    const addBookHandler = (book) => {
        const dateString = book.dateRead.toISOString().slice(0, 10);
        fetch("http://localhost:8080/book/crear", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                bookTitle: book.title,
                isbnCode: "",
                amountPages: book.pageCount,
                progress: 0,
                read: false,
                date: dateString,
                publisher: {
                    publisherName: "",
                    address: "",
                },
                author: {
                    authorName: book.author.split(" ")[0],
                    authorLastName: book.author.split(" ")[1],
                },
            }),
        })
            .then((response) => {
                if (response.ok) return response.json();
                else {
                    throw new Error("The response had some errors");
                }
            })
            .then(() => {
                const newBooksArray = [book, ...books];
                console.log(newBooksArray);
                setBooks(newBooksArray);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetch("http://localhost:8080/book/traertodoslosbook", {
            Headers: {
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((bookData) => {
                const booksMapped = bookData.map((book) => ({
                    id: book.id,
                    title: book.bookTitle,
                    author:
                        book.author.authorName +
                        " " +
                        book.author.authorLastName,
                    dateRead: new Date(book.date),
                    pageCount: book.amountPages,
                }));
                console.log(booksMapped);
                setBooks(booksMapped);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleFilterChange = (year) => {
        setYearFiltered(year);
    };

    return (
        <>
            <h1>Books Champion App!</h1>
            <h3>¡Quiero leer libros!</h3>
            <NewBook onBookAdded={addBookHandler} />
            <BooksFilter
                yearFiltered={yearFiltered}
                onYearChange={handleFilterChange}
            />
            <Books yearFiltered={yearFiltered} books={books} />
        </>
    );
};

export default Dashboard;
