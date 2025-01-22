import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addCard } from "../../redux/store";
import TextInput from "./../TextInput/TextInput";
import Button from './../Button/Button';
import styles from './CardForm.module.scss';

const CardForm = ({ columnId }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ title, columnId }));
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