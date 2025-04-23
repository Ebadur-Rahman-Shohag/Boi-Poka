import React from "react";
import { useLoaderData, useParams } from "react-router";
function BookDetails() {
    const booksData = useLoaderData();
    const id = useParams().bookId;

    const books = booksData.find((book) => Number(book.bookId) == Number(id));
    const { bookId, bookName, author, image, rating, category, tags, review, publisher, yearOfPublishing, totalPages } =
        books;
    return (
        <>
            <section className="container max-w-6xl mx-auto py-12 flex justify-between gap-12 w-full ">
                {/* image container */}
                <div className=" bg-[#1313130D] w-[45%] flex justify-center items-center rounded-2xl">
                    <img className="h-[80%] object-fit" src={image} alt="" />
                </div>
                {/* details container */}
                <div className="flex flex-col w-[55%]">
                    {/* title and author */}
                    <div className="space-y-4 border-b border-[#13131326] pb-6">
                        <h1 className="text-[40px] font-bold">{bookName}</h1>
                        <p className="text-xl text-[#131313CC] font-medium">{author}</p>
                    </div>
                    {/* category */}
                    <div className="border-b border-[#13131326] py-4">
                        <p className="text-xl text-[#131313CC] font-medium">{category}</p>
                    </div>
                    {/* description */}
                    <div className="py-6">
                        <p className="text-base text-[#131313B3] font-normal">
                            <span className="text-black font-bold">Review</span> : {review}
                        </p>
                    </div>
                    {/* tags */}
                    <div className="flex  items-center gap-2 border-b border-[#13131326] pb-6">
                        <p className="text-base font-bold">Tag</p>
                        {tags.map((tag, index) => (
                            <p key={index} className="bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] rounded-4xl">
                                {tag}
                            </p>
                        ))}

                    </div>
                    {/* extra details */}
                    <div className="py-6 flex items-center gap-20 ">
                        {/* left side */}
                        <div className="space-y-3 text-base font-normal text-[#131313B3]">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>

                        {/* right side */}
                        <div className="space-y-3 text-base font-semibold">
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    {/* buttons */}
                    <div className="space-x-4">
                        <button className="bg-[#1313134D] px-7 py-5 rounded-lg text-lg font-semibold">
                            Read Now
                        </button>
                        <button className="bg-[#50B1C9] px-7 py-5 rounded-lg text-lg text-white font-semibold">
                            Wishlist
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BookDetails;
