import './index.scss';

import {hydrate, render} from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<BrowserRouter><App /></BrowserRouter>, rootElement);
} else {
  render(<BrowserRouter><App /></BrowserRouter>, rootElement);
}