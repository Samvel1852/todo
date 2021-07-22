import styles from "./input.module.css";
import { string, func, boolean, number } from "prop-types";

function Input({ type, handleMainInputValue, cardValue, mainInputValue }) {
  return (
    <input
      onChange={(e) => handleMainInputValue(e)}
      className={styles.AddTodo}
      type={type}
      value={mainInputValue}
      autoFocus={true}
    />
  );
}

export default Input;

Input.propTypes = {
  type: string.isRequired,
  handleMainInputValue: func.isRequired,
};
