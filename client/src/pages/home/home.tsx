import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div className="flex justify-center items-center w-full h-96 gap-10 flex-wrap">
            <Link to="/sign-in" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</Link>
            <Link to="/sign-up" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</Link>
        </div>
    )
}

export default HomePage;