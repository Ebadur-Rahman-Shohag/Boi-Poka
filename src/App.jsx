import "./App.css";
import Banner from "./components/Banner";

import Book from "./components/book";
import Books from "./components/Books";
import Navbar from "./components/Navbar";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <>
      {/* header section*/}
      <header className="py-12">
        <Navbar />
      </header>
      {/* main section */}
      <main className="container max-w-6xl mx-auto">
        {/* <Banner />
        <Books /> */}
        <BookDetails />
      </main>
    </>
  );
}

export default App;
