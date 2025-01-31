import styles from './Card.module.scss';
import PropTypes from 'prop-types';

const Card = ({ title }) => {
    return(
        <li className={styles.card}>{title}</li>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired
}

export default Card;