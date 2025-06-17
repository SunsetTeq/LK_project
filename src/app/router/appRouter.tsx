import { Navigate, createHashRouter } from 'react-router-dom';
import { DefaultLayout } from '@ui/layouts';
import { Information } from '@pages/Information';
import { Catalog } from '@pages/Catalog';
import { Assignments } from '@pages/Assignments';

export const appRouter = createHashRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <Navigate to="information" replace />,
    children: [
      {
        path: 'information',
        element: <Information />,
      },
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'assignments',
        element: <Assignments />,
      },
      {
        index: true,
        element: <Navigate to="information" replace />,
      },
    ],
  },
]);
