import { createBrowserRouter } from "react-router";
import App from "./App";
import { Suspense, lazy } from "react";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
const Dashboard = lazy(() => import("./components/pages/Dashboard"));

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
          <Suspense fallback={<h1>Loading...</h1>}>
            <Dashboard />
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
