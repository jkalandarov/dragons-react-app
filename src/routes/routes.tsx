import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DragonPage from "../pages/dragonPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/api/monsters/:slug",
        element: <DragonPage />,
      },
    ],
  },
]);
