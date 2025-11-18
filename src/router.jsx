import { createBrowserRouter } from "react-router";
import App from "./App";
import { Suspense, lazy } from "react";
import Loader from "./common/Loader";
import ErrorPage from "./common/ErrorPage";

const Login = lazy(() => import("./features/auth/LoginPage"));
const Signup = lazy(() => import("./features/auth/SignupPage"));
const Dashboard = lazy(() => import("./features/dashboard/DashboardPage"));
const MyTask = lazy(() => import("./features/tasks/pages/MyTasksPage"));
const VitalTask = lazy(() => import("./features/tasks/pages/VitalTasksPage"));
const Projects = lazy(() => import(".//features/projects/pages/ProjectsPage"));
const Teams = lazy(() => import("./features/teams/pages/Teams"));
const Settings = lazy(() => import("./features/settings/SettingsPage"));
const Help = lazy(() => import("./features/help/HelpPage"));
const AccountInfo = lazy(() => import("./features/account/AccountPage"));

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
        path: "/projects",
        element: (
          <Suspense fallback={<Loader />}>
            <Projects />
          </Suspense>
        )
      },
      {
        path: "/teams",
        element: (
          <Suspense fallback={<Loader />}>
            <Teams />
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
