import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
// import { PrismicProvider } from '@prismicio/react';
// import { client } from './prismic.ts';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <PrismicProvider client={client}> */}
      <App />
      {/* </PrismicProvider> */}
    </BrowserRouter>
  </StrictMode>
);
