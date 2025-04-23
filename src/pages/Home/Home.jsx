import React from "react";
import BookDetails from "../BookDetails/BookDetails";
import Banner from "../../components/Banner";
import Books from "../../components/Books";
import { useLoaderData } from "react-router";

function Home() {
    const booksData = useLoaderData()

    return (
        <>
            {/* main section */}
            <main className="container max-w-6xl mx-auto">
                <Banner />
                <Books booksData={booksData} />
                {/* <BookDetails /> */}
            </main>
        </>
    );
}

export default Home;
