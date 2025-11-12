import { createBrowserRouter } from "react-router";
import App from "./App";
import { Suspense, lazy } from "react";
import Loader from "./components/utils/Loader";
import ErrorPage from "./components/utils/ErrorPage";

const Login = lazy(() => import("./features/auth/LoginPage"));
const Signup = lazy(() => import("./features/auth/SignupPage"));
const Dashboard = lazy(() => import("./features/dashboard/DashboardPage"));
const MyTask = lazy(() => import("./features/tasks/page/MyTasksPage"));
const VitalTask = lazy(() => import("./features/tasks/page/VitalTasksPage"));
const TaskCategories = lazy(() => import("./components/pages/TaskCategories/TaskCategories"));
const Settings = lazy(() => import("./components/pages/Settings"));
const Help = lazy(() => import("./components/pages/Help"));
const AccountInfo = lazy(() => import("./components/pages/AccountInfo"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        ),

      },
      {
        path: "/vital-task",
        element: (
          <Suspense fallback={<Loader />}>
            <VitalTask />
          </Suspense>
        )
      },
      {
        path: "/my-task",
        element: (
          <Suspense fallback={<Loader />}>
            <MyTask />
          </Suspense>
        )
      },
      {
        path: "/task-categories",
        element: (
          <Suspense fallback={<Loader />}>
            <TaskCategories />
          </Suspense>
        )
      },
      {
        path: "/settings",
        element: (
          <Suspense fallback={<Loader />}>
            <Settings />
          </Suspense>
        )
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<Loader />}>
            <Help />
          </Suspense>
        )
      },
      {
        path: "/account-info",
        element: (
          <Suspense fallback={<Loader />}>
            <AccountInfo />
          </Suspense>
        )
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loader />}>
        <Signup />
      </Suspense>
    ),
  },
]);

export default router;
