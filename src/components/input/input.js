import styles from "./input.module.css";
// import Proptypes from "prop-types";

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

// Input.proptypes = {
//   type: Proptypes.string.isRequired,
// };
