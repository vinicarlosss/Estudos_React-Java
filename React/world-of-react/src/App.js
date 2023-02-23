import "./App.css";
import { GlobalUserProvider } from "./context/user.context";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { GlobalCharacterProvider } from "./context/character.context";
function App() {
  return (
    <GlobalUserProvider>
      <GlobalCharacterProvider>
        <RouterProvider router={router} />
      </GlobalCharacterProvider>
    </GlobalUserProvider>
  );
}

export default App;
