import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/sign-in/sign-in";
import SignUpPage from "../pages/sign-up/sign-up";

const routes = [
    {
        path: '/',
        element: <SignInPage />
    },
    {
        path: '/sign-up',
        element: <SignUpPage />
    },
]

export const router = createBrowserRouter(routes);