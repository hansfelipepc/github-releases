/*
* El STORE es quien guardara el estado actual de nuestra aplicacion.
*
*/

// Importamos el método para crear el store de redux
import { createStore } from 'redux';

// Importamos el reducer de nuestra aplicación, que es el que define la estructura
// del Store y sus datos iniciales (initialState)
import Reducer from './reducers/reducer';

// Creamos el store, llamando al metodo y pasando como parametro el reducer
const store = createStore(Reducer);
//exportamos
export default store;
