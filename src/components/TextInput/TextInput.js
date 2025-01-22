import styles from './TextInput.module.scss';

const TextInput = ({ placeholder, value, onChange }) => {
    return(
        <input type="text" className={styles.input} placeholder={placeholder} value={value} onChange={onChange} />
    );
}

export default TextInput;