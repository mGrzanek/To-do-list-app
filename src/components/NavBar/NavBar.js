import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
    return(
        <nav className={styles.navigation}>
            <Container>
                <div className={styles.links}>
                    <a href="/"><i className="fa fa-tasks"></i></a>
                    <div>
                        <a href="/">Home</a>
                        <a href="/favorite">Favorite</a>
                        <a href="/about">About</a>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default NavBar;