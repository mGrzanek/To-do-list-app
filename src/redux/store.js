import { createStore } from 'redux';
import initialState from './initialState';
import { nanoid } from 'nanoid';

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_COLUMN':
      return { ...state, columns: [ ...state.columns, { id: nanoid(), ...action.payload} ]};
    case'ADD_CARD':
    return { ...state, cards: [ ...state.cards, { id: nanoid(), ...action.payload} ]};
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;