import { RouterProvider } from 'react-router-dom';
import { router } from "./router";
import './App.css';
import { GlobalUserProvider } from './contexts/usuario/user.contex';
import { GlobalToastrProvider } from './contexts/toastr/toastr.context';
import { Toastr } from './ui/components';

function App() {
  return (
    <GlobalToastrProvider>
      <GlobalUserProvider>
        <RouterProvider router={router} />
        <Toastr />
      </GlobalUserProvider>
    </GlobalToastrProvider>
  );
}

export default App;