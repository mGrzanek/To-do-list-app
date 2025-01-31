import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import PropTypes from 'prop-types';

const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();

    const toggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(id));
    }
    return(
        <li className={styles.card}>
            {title}
            <i className={clsx("fa fa-star-o", isFavorite && styles.isFavorite)} onClick={toggleFavorite} />
        </li>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
}

export default Card;