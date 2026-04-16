import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store';

console.log('Main.tsx executing...', store);

createRoot(document.getElementById('root')!).render(
 <StrictMode>
 <BrowserRouter>
 <Provider store={store}>
 <App />
 </Provider>
 </BrowserRouter>
 </StrictMode>
);
