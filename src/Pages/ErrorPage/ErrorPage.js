import React from "react";

import { Link } from "react-router-dom";

const ErrorPage = () => {
    const defining = {
        com: "Home",
        h: "Page Not Found: 404",
        sh: "404 Not Found"
    }
    return (
        <div className="w-[full] h-[100vh] text-indego-950 font-semibold ">
           
            <div className="w-[80%] mx-auto text-center py-5 text-2xl  text-indego-950 font-semibold">
            <h1 className="text-indigo-950 text-5xl font-bold">404 ERROR!</h1>
            <h2 >Oops! The page you are looking for does not exist.</h2>
            <Link to="/" className="text-blue-500">Go home</Link>

            </div>
           


        </div>
    )
}
export default ErrorPage