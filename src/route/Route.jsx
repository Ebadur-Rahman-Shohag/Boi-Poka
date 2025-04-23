import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import Listed from "../pages/Listed/Listed";
import Read from "../pages/Read/Read";
import BookDetails from "../pages/BookDetails/BookDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                loader: () => fetch("data/booksData.json"),
                element: <Home />
            },
            {
                path: "/book/:bookId",
                loader: () => fetch("data/booksData.json"),
                element: <BookDetails />
            },
            { path: "/listed", element: <Listed /> },
            { path: "/read", element: <Read /> },
        ],
    },
]);

export default router;
