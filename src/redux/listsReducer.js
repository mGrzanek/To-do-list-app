import { nanoid } from "nanoid";

const listsReducer = (statePart = [], action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return [...statePart, { ...action.payload, id: nanoid() }];
        default:
            return statePart;
    };
};
  
export default listsReducer;