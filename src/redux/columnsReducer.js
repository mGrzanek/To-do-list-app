import { nanoid } from "nanoid";

//selectors
export const getAllColumns = state => state.columns;
export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);

// actions
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const addColumn = payload => ({ type: ADD_COLUMN, payload });
const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
        case ADD_COLUMN:
            return [ ...statePart, { id: nanoid(), ...action.payload } ];
        default:
            return statePart;
    }
}

export default columnsReducer;