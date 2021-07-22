import { string, func, bool, number, array } from "prop-types";
import styles from "./button.module.css";
import Icon from "../../helpers/Icon";

const getStyles = (type) => {
  switch (type) {
    case "Edit":
      return styles.Edit;
    case "Delete":
      return styles.Delete;
    case "Add":
      return styles.Add;
    case "Save":
      return styles.Save;
    case "All":
      return styles.All;
    case "Active":
      return styles.Active;
    case "Completed":
      return styles.Completed;
  }
};

function Button({ type, onClickHandler, isHidden }) {
  if (type === "All" || type === "Active" || type === "Completed") {
    return (
      <button onClick={onClickHandler} className={getStyles(type)}>
        {type}
      </button>
    );
  }
  return (
    <button
      hidden={isHidden}
      onClick={onClickHandler}
      className={getStyles(type)}
    >
      <Icon type={type} />
    </button>
  );
}

export default Button;

Button.propTypes = {
  isHidden: bool,
  onClickHandler: func.isRequired,
};
