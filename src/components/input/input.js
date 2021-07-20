import styles from "./input.module.css";

function Input({ type, handleMainInputValue }) {
  return (
    <input
      onChange={(e) => handleMainInputValue(e)}
      className={styles.AddTodo}
      type={type}
    />
  );
}

export default Input;
