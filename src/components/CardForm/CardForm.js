import { useState } from "react";
import TextInput from "./../TextInput/TextInput";
import Button from './../Button/Button';
import styles from './CardForm.module.scss';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action(
            {title: title},
            props.columnId
        );
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