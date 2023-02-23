import { createBrowserRouter } from "react-router-dom";
import * as uiScreens from "../ui/screens/index";
import { PrivateRoute } from "./private-route.component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <uiScreens.Login />,
  },
  {
    path: "/home",
    element: <PrivateRoute Screen={uiScreens.Home} />,
  },
  {
    path: "/characterPage",
    element: <PrivateRoute Screen={uiScreens.CharacterPage} />,
  },
  {
    path: "/quests",
    element: <PrivateRoute Screen={uiScreens.Quests} />,
  },
  {
    path: "/create-character",
    element: <PrivateRoute Screen={uiScreens.CreateCharacter} />,
  },
  { path: "/shop", element: <PrivateRoute Screen={uiScreens.Shop} /> },
  {
    path: "/battle/:characterId",
    element: <PrivateRoute Screen={uiScreens.Battle} />,
  },
  {
    path: "/register-user",
    element: <uiScreens.RegisterUser />,
  },
  {
    path: "/backpack",
    element: <PrivateRoute Screen={uiScreens.Backpack} />,
  },
]);
