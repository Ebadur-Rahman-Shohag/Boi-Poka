import React from 'react'
import bookImage from "/assets/books.png";
function Banner() {
    return (
        <>
            {/* banner section*/}
            <section className="bg-[#1313130D] rounded-3xl flex justify-around items-center py-20">
                {/* title and button container */}
                <div className="max-w-[526px] space-y-12">
                    <h1 className="text-[56px] font-bold text-[#131313 ]">
                        Books to freshen up your bookshelf
                    </h1>
                    <button className="bg-[#23BE0A] text-white px-7 py-5 rounded-lg text-xl font-bold">
                        View The List
                    </button>
                </div>
                {/* image container */}
                <div>
                    <img className="w-full h-full object-fit" src={bookImage} alt="" />
                </div>
            </section>
        </>
    )
}

export default Banner