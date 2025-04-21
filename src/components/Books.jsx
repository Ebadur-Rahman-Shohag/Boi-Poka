import React from "react";
import Book from "./book";
function Books() {
    return (
        <>
            {/* books list section */}
            <section className="mt-28 pb-10">
                <h1 className="text-[40px] font-bold text-center">Books</h1>
                {/* books cards container */}
                <div className="mt-9 grid grid-cols-3 gap-6 ">
                    {/* book card */}
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                </div>
            </section>
        </>
    );
}

export default Books;
