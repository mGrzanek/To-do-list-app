import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/store";
import FormPattern from "../FormPattern/FormPattern";

const ListForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        dispatch(addList({ title, description }));
    }

    return(
        <FormPattern
            title={title}
            setTitle={setTitle}
            param={description}
            setParam={setDescription}
            action={handleSubmit}
            titleValue="Title" 
            paramValue="Description" 
            buttonValue="Add list"
        />
    );
}

export default ListForm;