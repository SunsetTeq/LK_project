import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouterProvider } from './providers/AppRouterProvider';
import { AppReduxProvider } from './providers/AppReduxProvider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppReduxProvider>
      <AppRouterProvider />
    </AppReduxProvider>
  </StrictMode>,
);
