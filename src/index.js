import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { CartProvider } from './Context/CartProvider/Cart';
import { SearchProvider } from './Context/SearchProvider/Search';
import { SubCategoryProvider } from './Context/Sub/SubCategoryOfCategory';

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
          <CartProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </CartProvider>
      </SearchProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
