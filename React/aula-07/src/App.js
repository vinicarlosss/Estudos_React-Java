import { RouterProvider } from "react-router-dom"
import { router } from "./router/index"
import { GlobalLanguageProvider } from "./context/language/language.context"
import "./App.css"

function App() {
  return (
    <>
      <GlobalLanguageProvider>
        <RouterProvider router={router} />
      </GlobalLanguageProvider>
    </>
  )
}
export default App