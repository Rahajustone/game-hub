import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import GameDetailsPage from "../pages/GameDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/games/:slug",
        element: <GameDetailsPage />,
      },
    ],
  },
]);

export default router;