import styles from './PageTitle.module.scss';

const PageTitle = ({children}) => {
    return(
        <div>
            <h1 className={styles.title}>{children}</h1>
        </div>
    );
}

export default PageTitle;