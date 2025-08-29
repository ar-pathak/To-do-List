import { createBrowserRouter } from "react-router";
import App from "./App";
import { Suspense } from "react";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Hero from "./components/pages/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    ),
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Hero />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Signup />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
