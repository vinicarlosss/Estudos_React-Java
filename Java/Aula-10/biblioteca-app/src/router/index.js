import { createBrowserRouter } from "react-router-dom";
import * as uiScreens from '../ui/screens/index';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <uiScreens.Login/>
    },
    {
        path: '/livros',
        element: <uiScreens.Livros/>
    }
])