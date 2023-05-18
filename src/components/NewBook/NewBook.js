import "./NewBook.css";

import BookForm from "../BookForm/BookForm";

const NewBook = ({ onBookAdded }) => {
    // const bookAddHandler = (book) => {
    //     onBookAdded(book);
    // };

    return (
        <div className="new-book">
            <BookForm onBookAdded={onBookAdded} />
        </div>
    );
};

export default NewBook;
