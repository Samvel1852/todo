import styles from "./input.module.css";

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
