// Styles
import './index.css';

// Importamos las distintas librerias
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// Importamos los componentes
import BaseContainer from './containers/BaseContainer';
import DetailsContainer from './containers/DetailsContainer';
import About from './components/About';


ReactDOM.render(
   <Router history={ hashHistory }>
       <Route path="/" component={ BaseContainer }>
           <Route path="/:user/:repo" component={ DetailsContainer }/>
           <Route path="/about" component={ About }/>
       </Route>


   </Router>,
  document.getElementById('root')
);
