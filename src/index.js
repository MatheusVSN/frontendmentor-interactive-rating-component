import ReactDOM from 'react-dom/client';

import RatingComponentMain from './rating-component';
import {BrowserRouter as Router} from 'react-router-dom';

import "./assets/css/style.css"

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router>
    <RatingComponentMain/>
  </Router>
);