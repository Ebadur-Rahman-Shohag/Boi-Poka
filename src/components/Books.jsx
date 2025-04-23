import React from "react";
import Book from "./book";


function Books({ booksData }) {

    return (
        <>
            {/* books list section */}
            <section className="mt-28 pb-10">
                <h1 className="text-[40px] font-bold text-center">Books</h1>
                {/* books cards container */}
                <div className="mt-9 grid grid-cols-3 gap-6 ">
                    {/* book card */}
                    {booksData.map((book) => (
                        <Book key={book.bookId} book={book} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Books;
