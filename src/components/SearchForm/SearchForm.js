import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [ title, setTitle ] = useState('');
    const titleFinder = e => {
        e.preventDefault();
        dispatch({
            type: 'UPDATE_SEARCHSTRING',
            payload: title 
        });
        setTitle('');
    }
    return (
        <form className={styles.searchForm} onSubmit={ titleFinder }>
            <TextInput placeholder="Search..." value={ title } onChange={ e => setTitle(e.target.value) } />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
}

export default SearchForm;