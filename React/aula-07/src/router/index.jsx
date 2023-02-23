import { createBrowserRouter } from "react-router-dom"
import * as uiScreens from "../ui/screens/index.js"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <uiScreens.Home />,
  },
  {
    path: "/agents",
    element: <uiScreens.Agents />,
  },
  {
    path: "/skins",
    element: <uiScreens.Skins />,
  },
  {
    path: "/agent/:agentId",
    element: <uiScreens.AgentDetails />,
  },
  {
    path: "/skinDetail",
    element: <uiScreens.SkinDetails />,
  },
])
