import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {WordProvider} from './wordBankContext';

import LocalServiceWorkerRegister from './sw'

ReactDOM.render(
  <React.StrictMode>
    <WordProvider>
    <App />
    </WordProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

LocalServiceWorkerRegister()

reportWebVitals();
