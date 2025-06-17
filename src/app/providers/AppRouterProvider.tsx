import { appRouter } from '@app/router/appRouter';
import { RouterProvider } from 'react-router-dom';

export const AppRouterProvider = () => {
  return <RouterProvider router={appRouter} />;
};
