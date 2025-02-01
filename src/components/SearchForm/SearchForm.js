import styles from './SearchForm.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringReducer';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [ title, setTitle ] = useState('');

    useEffect(() => {
        dispatch(updateSearchString(title));
    }, []);

    const titleFinder = e => {
        e.preventDefault();
        dispatch(updateSearchString(title));
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