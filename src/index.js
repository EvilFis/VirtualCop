import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import Header from './components/header'
import Tools from './components/Tools'

import './sass/style.scss';

ReactDOM.render(
    <div className="container">
        <Header />
        <Tools />
    </div>,
  document.getElementById('root')
);





serviceWorkerRegistration.unregister();

reportWebVitals();
