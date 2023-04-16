import { createBrowserRouter } from 'react-router-dom';
import {
  Posts,
  ChangePassScreen,
  HomeScreen,
  FindPlace,
  Profile,
  Login,
  Services,
  List,
} from '../ui/index';
import { PrivateRoute } from './privateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <PrivateRoute Screen={HomeScreen} />,
  },
  {
    path: '/usuarios/alterar-senha/:id/:token',
    element: <ChangePassScreen />,
  },
  {
    path: '/findPlace',
    element: <PrivateRoute Screen={FindPlace} />,
  },
  {
    path: '/posts',
    element: <PrivateRoute Screen={Posts} />,
  },
  {
    path: '/profile',
    element: <PrivateRoute Screen={Profile} />,
  },
  {
    path: '/services',
    element: <PrivateRoute Screen={Services} />,
  },
  {
    path: '/list',
    element: <PrivateRoute Screen={List} />,
  },
]);
