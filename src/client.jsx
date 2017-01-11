import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { App } from './components';

const mountNode = document.getElementById('content');
render(<App />, mountNode, () => {
  console.log('client side now active');
});
