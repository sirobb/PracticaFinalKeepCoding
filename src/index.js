import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* almacena el estado de autenticacion de los usuarios */}
    {/* provee metodos para logear/deslogear usuarios */}
    <Auth0Provider 
      domain="dev-gtpq18hv.us.auth0.com" 
      clientId="lZedV56JLhVoVPOqhUzxlwjmXYUaeoHi" 
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
