import { createBrowserRouter } from "react-router-dom"
import * as uiScreens from "../ui/screens/index"
import { PrivateRoute, privateRoute } from "./private-route.component"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <uiScreens.Login />,
  },
  {
    path: "/perfil",
    element: <PrivateRoute Screen={uiScreens.Profile} />,
  },
])
