import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import '../assets/fonts/DigitalMono.ttf';

import App from './components/app';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
