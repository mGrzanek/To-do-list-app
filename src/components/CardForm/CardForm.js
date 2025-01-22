import { useState } from "react";
import { useDispatch } from 'react-redux';
import TextInput from "./../TextInput/TextInput";
import Button from './../Button/Button';
import styles from './CardForm.module.scss';

const CardForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ 
            type: 'ADD_CARD', 
            payload: {  columnId: props.columnId, title } 
        });
        setTitle('');
    }
    return(
        <form onSubmit={handleSubmit} className={styles.cardForm}>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Add new card...' />
            <Button>Add</Button>
        </form>
    );
}

export default CardForm;