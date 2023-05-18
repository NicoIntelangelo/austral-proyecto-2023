import BookItem from "../bookItem/BookItem";

const Books = ({ books, yearSelect }) => {
    const booksMapped = books
        .filter(
            (book) =>
                book.dateRead.getFullYear().toString() === yearSelect.toString()
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
                <p>No Hay lecturas para el año {yearSelect} </p>
            ) : (
                booksMapped
            )}
        </div>
    );
};

export default Books;
