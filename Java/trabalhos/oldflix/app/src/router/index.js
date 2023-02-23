import { createBrowserRouter } from "react-router-dom";
import * as uiScreens from "../ui/screens/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <uiScreens.Home />,
  },
  {
    path: "/register",
    element: <uiScreens.Register />,
  },
  {
    path: "/rent",
    element: <uiScreens.Rent />,
  },
  {
    path: "/giveback",
    element: <uiScreens.GiveBack />,
  },
  {
    path: "/movie/:movieId",
    element: <uiScreens.MovieDetails />,
  },
  {
    path: "/alterar/:movieId",
    element: <uiScreens.Change />,
  },
]);
