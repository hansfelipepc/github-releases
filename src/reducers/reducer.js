/**
 * Este fichero contiene el reducer principal de nuestra aplicación.
 * Basándonos en los tipos de las acciones, se realizaran modificaciones
 * sobre el estado inicial
 */

// Estado inicial de nuestra aplicación
const initialState = {
  search: '',
  loading: false,
  results: [],
  queried: false
};

/**
 * El reducer recibe el estado actual y la acción a ejecutar. Si el estado
 * no está definido, obtenemos el estado por defecto.
 *
 * El reducer recibe el estado inicial y la accion, pero como en la primera
 * iteracion el estado estara vacio, hacemos que por defecto el estado
 * sea InitialState.
 */
const reducer = (state = initialState, action) => {
  //Debemos iterar por el tipo de accion
  switch (action.type) {
    /**
     * Comenzamos la búsqueda
     */
    case 'SEARCH_START': {
      //Retornar un nuevo estado (una copia, ya que debe ser onmutable)
      //El search viene en el action
      return Object.assign({}, state, { loading: true, search: action.search });
    }
    /**
     * La búsqueda ha terminado.
     */
    case 'SEARCH_SUCCESS': {
      //los resultados vienen en el action
      return Object.assign({}, state, {
        loading: false, results: action.results, queried: true
      });
    }
    default: {
      // Es importante retornar por defecto el estado.
      // Si no retornamos nada en un Reducer, el estado se pierde
      return state;
    }
  }
};

export default reducer;
