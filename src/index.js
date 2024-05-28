import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routegql } from './router';
import Stateslist from './stateslist';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});
const router = createBrowserRouter([
  {
    path : routegql.countrylist,
    element : <App />
  },
  {
    path : routegql.statelist,
    element : <Stateslist />
  },
  {
    path : "/",
    element : <App />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}>

      </RouterProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
