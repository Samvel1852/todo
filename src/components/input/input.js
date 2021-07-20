import styles from "./input.module.css";

function Input({ type }) {
  return <input className={styles.AddTodo} type={type} />;
}

export default Input;
