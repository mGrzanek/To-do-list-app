import styles from "./About.module.scss";
import PageTitle from "../PageTitle/PageTitle";

const About = () => {
    return(
        <section>
            <PageTitle>About</PageTitle>
            <div className={styles.about}>
                <p>This app will let you manage what you want to do! You can plan things to do, travel, shopping or many more according to your needs.</p> 
                <p> Create new lists, bookmarks and add tasks. You can add priority tasks to favorites, making it easier for you or other associates to remember them. You can easily delete completed tasks.</p> 
                <p>Let planning become more enjoyable now!</p>
            </div>
        </section>
    );
}

export default About;