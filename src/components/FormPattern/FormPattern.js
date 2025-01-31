import styles from "./FormPattern.module.scss";
import PropTypes from 'prop-types';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const FormPattern = ({ action, title, setTitle, param, setParam, titleValue, paramValue, buttonValue }) => {
    const handleSubmit = e => {
        e.preventDefault();
        action({ title, param });
        setTitle('');
        setParam('');
    }
    return(
        <form onSubmit={handleSubmit} className={styles.formPattern}>
            <span>{titleValue}: </span>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <span>{paramValue}: </span>
            <TextInput type="text" value={param} onChange={e => setParam(e.target.value)}/>
            <Button>{buttonValue}</Button>
        </form>
    );
}

FormPattern.propTypes = {
    action: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    param: PropTypes.string.isRequired,
    setParam: PropTypes.func.isRequired,
    titleValue: PropTypes.string.isRequired,
    paramValue: PropTypes.string.isRequired,
    buttonValue: PropTypes.string.isRequired
}

export default FormPattern;