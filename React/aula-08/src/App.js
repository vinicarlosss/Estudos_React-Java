import { RouterProvider } from "react-router-dom"
import { router } from "./router/index"
import { GlobalUserProvider } from "./context/user.context"
import "./App.css"

function App() {
  return (
    <>
      <GlobalUserProvider>
        <RouterProvider router={router} />
      </GlobalUserProvider>
    </>
  )
}

export default App;