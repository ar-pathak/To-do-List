import { createBrowserRouter } from "react-router";
import App from "./App";
import { Suspense, lazy } from "react";
import MyTask from "./components/pages/MyTask";

const Login = lazy(() => import("./components/authentication/Login"));
const Signup = lazy(() => import("./components/authentication/Signup"));
const Dashboard = lazy(() => import("./components/pages/Dashboard"));
const VitalTask = lazy(() => import("./components/pages/VitalTask"));
const TaskCategories = lazy(() => import("./components/pages/TaskCategories"));
const Settings = lazy(() => import("./components/pages/Settings"));

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
      {
        path: "/my-task",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <MyTask />
          </Suspense>
        )
      },
      {
        path: "/task-categories",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <TaskCategories />
          </Suspense>
        )
      },
      {
        path: "/settings",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Settings />
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
