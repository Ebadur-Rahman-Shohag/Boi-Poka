import "./App.css";
import bookImage from "/assets/books.png";

function App() {
  return (
    <>
      {/* header section*/}
      <header className="py-12">
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
      </header>
      {/* main section */}
      <main className="container max-w-6xl mx-auto">
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
      </main>
      {/* footer section */}
      <footer></footer>
    </>
  );
}

export default App;
