import React from "react";
import bookImage from "/assets/books.png";

function Book() {
    return (
        <>
            <div className="border border-[#13131326] rounded-2xl p-6">
                {/* image container */}
                <div className="bg-[#F3F3F3] h-[230px] flex justify-center items-center rounded-2xl">
                    <img
                        className="h-[80%] object-fit"
                        src={bookImage}
                        alt="book-image"
                    />
                </div>
                {/* options container */}
                <div className="mt-6 flex gap-3">
                    <p className="bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] rounded-4xl">
                        Young Adult
                    </p>
                    <p className="bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] rounded-4xl">
                        Identity
                    </p>
                </div>
                {/* title and author container */}
                <div className="py-4 space-y-4 border-b-2 border-dashed border-b-[#13131326]">
                    <h3 className="text-2xl font-bold">The Catcher in the Rye</h3>
                    <p className="text-base font-medium text-[#131313CC]">
                        By : Awlad Hossain
                    </p>
                </div>
                {/* category and rating container */}
                <div className="flex justify-between mt-5">
                    <p className="text-base font-medium">Fiction</p>
                    <p className="text-base font-medium space-x-2">
                        <span>5.00</span>
                        <span>⭐</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Book;
