import styles from './Column.module.scss';
import { getFilteredCards } from '../../redux/store';
import Card from './../Card/Card';
import CardForm from './../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = ({ id, title, icon }) => {
    const cards = useSelector(state => getFilteredCards(state, id));
    
    return(
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ` fa fa-${icon}`}></span>{title}</h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} {...card} />)}
            </ul>
            <CardForm columnId={id} />
        </article>
    );
}

export default Column;