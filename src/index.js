import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from 'react-dom/client';
import './index.css';
import './media.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import store from './store/store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
const uri='https://devab-yuvacracy-frontend.netlify.app/post/articles/';
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider

        domain="dev-1e03tat40ag0r34p.us.auth0.com"
        clientId="At8sMhXSQ8JCbiMWCUUiPK0wzsgD9Mlx"
        // redirectUri={window.location.origin}
        redirectUri={uri}
      >
        <Provider store={store} >
          <App />

        </Provider>
      </Auth0Provider>


    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
