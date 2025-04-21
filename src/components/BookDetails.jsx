import React from "react";
import bookImage from "/assets/books.png";
function BookDetails() {
    return (
        <>
            <section className="py-12 flex justify-between gap-12 w-full ">
                {/* image container */}
                <div className="bg-[#1313130D] w-[45%] flex justify-center items-center rounded-2xl">
                    <img className="h-[80%] object-fit" src={bookImage} alt="" />
                </div>
                {/* details container */}
                <div className="flex flex-col w-[55%]">
                    {/* title and author */}
                    <div className="space-y-4 border-b border-[#13131326] pb-6">
                        <h1 className="text-[40px] font-bold">The Catcher in the Rye</h1>
                        <p className="text-xl text-[#131313CC] font-medium">
                            By : Awlad Hossain
                        </p>
                    </div>
                    {/* category */}
                    <div className="border-b border-[#13131326] py-4">
                        <p className="text-xl text-[#131313CC] font-medium">Fiction</p>
                    </div>
                    {/* description */}
                    <div className="py-6">
                        <p className="text-base text-[#131313B3] font-normal">
                            <span className="text-black font-bold">Review</span> : Sit amet
                            consectetur. Interdum porta pulvinar non sit aliquam. Aenean
                            pulvinar blandit vel non enim elementum penatibus pellentesque ac.
                            Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a
                            auctor erat diam tellus. Fermentum faucibus nulla enim ornare. Id
                            neque neque pretium enim platea urna non dictum. Faucibus
                            dignissim ridiculus nibh tristique massa non.
                        </p>
                    </div>
                    {/* tags */}
                    <div className="flex  items-center gap-2 border-b border-[#13131326] pb-6">
                        <p className="text-base font-bold">Tag</p>
                        <p className="bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] rounded-4xl">
                            Young Adult
                        </p>
                        <p className="bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] rounded-4xl">
                            Identity
                        </p>
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
                            <p >281</p>
                            <p >J.B Lippincott & Co.</p>
                            <p >1960</p>
                            <p >4.8</p>
                        </div>

                    </div>
                    {/* buttons */}
                    <div className="space-x-4">
                        <button className="bg-[#1313134D] px-7 py-5 rounded-lg text-lg font-semibold">Read Now</button>
                        <button className="bg-[#50B1C9] px-7 py-5 rounded-lg text-lg text-white font-semibold">Wishlist</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BookDetails;
