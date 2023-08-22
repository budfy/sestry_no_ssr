import './index.scss';

import {createRoot, hydrateRoot} from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <BrowserRouter><App /></BrowserRouter>);
} else {
  root.render(<BrowserRouter><App /></BrowserRouter>);
}