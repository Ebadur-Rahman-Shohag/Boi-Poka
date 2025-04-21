import React from "react";

function Navbar() {
    return (
        <>
            {/* navbar */}
            <nav className="container max-w-6xl mx-auto flex justify-between items-center ">
                {/* logo */}
                <div>
                    <h1 className="text-3xl font-bold">Book Vibe</h1>
                </div>
                {/* links */}
                <div className="flex items-center justify-center gap-4 text-lg text-[#131313CC] font-semibold">
                    <a
                        className="border border-[#23BE0A] rounded-lg px-5 py-[14px]"
                        href="#"
                    >
                        Home
                    </a>
                    <a href="#">Listed Books</a>
                    <a href="#">Pages to Read</a>
                </div>
                {/* buttons */}
                <div className="space-x-4">
                    <button className="bg-[#23BE0A] text-white px-7 py-5 rounded-lg text-lg font-semibold">
                        Sign In
                    </button>
                    <button className="bg-[#59C6D2] text-white px-7 py-5 rounded-lg text-lg font-semibold">
                        Sign Up
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
