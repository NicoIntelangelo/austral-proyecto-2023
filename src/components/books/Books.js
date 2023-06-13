import BookItem from "../bookItem/BookItem";
import React from "react";

const Books = ({ books, yearFiltered }) => {
    const booksMapped =
        yearFiltered === ""
            ? books.map((book) => (
                  <BookItem
                      key={book.id}
                      title={book.title}
                      author={book.author}
                      pageCount={book.pageCount}
                      dateRead={book.dateRead}
                  />
              ))
            : books
                  .filter(
                      (book) =>
                          book.dateRead.getFullYear().toString() ===
                          yearFiltered
                  )
                  .map((book) => (
                      <BookItem
                          key={book.id}
                          title={book.title}
                          author={book.author}
                          pageCount={book.pageCount}
                          dateRead={book.dateRead}
                      />
                  ));

    return (
        <div className="books">
            {booksMapped.length === 0 ? (
<<<<<<< HEAD
                <p>No hay lecturas disponibles para el año {yearFiltered}</p>
=======
                <p>No Hay lecturas para el año {yearSelect} </p>
>>>>>>> 65d973814655bb3bd5e62ca8544e9b5c7b65f314
            ) : (
                booksMapped
            )}
        </div>
    );
};

export default Books;
