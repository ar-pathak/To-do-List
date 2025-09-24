import { createBrowserRouter } from "react-router";
import App from "./App";
import { Suspense, lazy } from "react";

const Login = lazy(() => import("./components/authentication/Login"));
const Signup = lazy(() => import("./components/authentication/Signup"));
const Dashboard = lazy(() => import("./components/pages/Dashboard"));
const VitalTask = lazy(() => import("./components/pages/VitalTask"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    ),
    errorElement: <h1>Page Not Found</h1>,
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
        path: "/vital-task",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <VitalTask />
          </Suspense>
        )
      },

    ],
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
]);

export default router;
