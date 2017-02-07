// Styles
import './index.css';

// Importamos las distintas librerias
import React from 'react';
import ReactDOM from 'react-dom';

// Importamos los componentes
import Header from './components/Header';
import SearchContainer from './containers/SearchContainer';
// import DetailsContainer from './containers/DetailsContainer';


ReactDOM.render(
  //<Header />,
   <SearchContainer />,
  // <DetailsContainer />,
  document.getElementById('root')
);
