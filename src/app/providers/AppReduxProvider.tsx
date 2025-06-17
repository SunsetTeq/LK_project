import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { appStore } from '../store/AppStore';

export const AppReduxProvider = ({ children }: { children: ReactNode }) => {
  return <ReduxProvider store={appStore}>{children}</ReduxProvider>;
};
