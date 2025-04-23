import React from "react";
import { Link } from "react-router";

function Book({ book }) {

    const {
        bookId,
        bookName,
        author,
        image,
        rating,
        category,
        tags,
    } = book;
    return (
        <>
            <Link to={`/book/${bookId}`}><div className="border border-[#13131326] rounded-2xl p-6">
                {/* image container */}
                <div className="bg-[#F3F3F3] h-[230px] flex justify-center items-center rounded-2xl">
                    <img className="h-[80%] object-fit" src={image} alt="book-image" />
                </div>
                {/* tags container */}
                <div className="mt-6 flex gap-3">
                    {tags.map((tag, index) => (
                        <p
                            key={index}
                            className="bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] rounded-4xl"
                        >
                            {tag}
                        </p>
                    ))}
                </div>
                {/* title and author container */}
                <div className="py-4 space-y-4 border-b-2 border-dashed border-b-[#13131326]">
                    <h3 className="text-2xl font-bold">{bookName}</h3>
                    <p className="text-base font-medium text-[#131313CC]">{author}</p>
                </div>
                {/* category and rating container */}
                <div className="flex justify-between mt-5">
                    <p className="text-base font-medium">{category}</p>
                    <p className="text-base font-medium space-x-2">
                        <span>{rating}</span>
                        <span>⭐</span>
                    </p>
                </div>
            </div></Link>
        </>
    );
}

export default Book;
