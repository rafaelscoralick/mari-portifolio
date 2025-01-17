import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { PrismicProvider } from '@prismicio/react';
import { client } from './prismic.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </StrictMode>
);
