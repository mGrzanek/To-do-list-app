import { nanoid } from "nanoid";

const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
        case 'ADD_COLUMN':
            return [ ...statePart, { id: nanoid(), ...action.payload } ];
        default:
            return statePart;
    }
}

export default columnsReducer;