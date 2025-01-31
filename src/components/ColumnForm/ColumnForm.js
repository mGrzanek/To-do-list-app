import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addColumn } from "../../redux/store";
import FormPattern from "../FormPattern/FormPattern";

const ColumnForm = ({listId}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = () => {
        dispatch(addColumn({ title, icon, listId }));
    }

    return(
        <FormPattern 
            title={title} 
            setTitle={setTitle} 
            param={icon} 
            setParam={setIcon} 
            action={handleSubmit} 
            titleValue="Title"
            paramValue="Icon" 
            buttonValue="Add column" 
        />
    );
}

export default ColumnForm;