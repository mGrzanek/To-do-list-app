import { nanoid } from "nanoid";

// selectors
export const getAllLists = state => state.lists;
export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

// action creators 
export const addList = payload => ({ type: ADD_LIST, payload });
const listsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_LIST:
            return [...statePart, { ...action.payload, id: nanoid() }];
        default:
            return statePart;
    };
};
  
export default listsReducer;