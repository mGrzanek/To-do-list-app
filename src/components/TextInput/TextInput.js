import styles from './TextInput.module.scss';
import PropTypes from 'prop-types';

const TextInput = ({ placeholder, value, onChange }) => {
    return(
        <input type="text" className={styles.input} placeholder={placeholder} value={value} onChange={onChange} />
    );
}

TextInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TextInput;