import React from "react";
import ReactDOM from "react-dom";

import App from './App';

ReactDOM.render(
  <App drupal={drupalSettings.data}/>,
  document.getElementById('react-app')
);