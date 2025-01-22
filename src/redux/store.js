import { createStore } from 'redux';
import initialState from './initialState';
import { nanoid } from 'nanoid';
import { strContains } from '../utils/strContains.js';

//selectors
export const getAllColumns = state => state.columns;
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

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