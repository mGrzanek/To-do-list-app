import PageTitle from "../PageTitle/PageTitle";
import Card from "../Card/Card";
import styles from "./Favorite.module.scss";
import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/store";

const Favorite = () => {
    const favoriteCards = useSelector(state => getFavoriteCards(state));
    
    if(favoriteCards.length === 0) return (
        <>
            <PageTitle>Favorite</PageTitle>
            <p className={styles.subtitle}>No favorite cards yet...</p>
        </>
    )

    return(
        <div>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {favoriteCards.map(favoriteCard => <Card key={favoriteCard.id} {...favoriteCard} />)}
                </ul>
            </article>
        </div>
    );
}

export default Favorite;