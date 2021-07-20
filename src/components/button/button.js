import styles from "./button.module.css";
import Icon from "../../helpers/Icon";

function Button({ type }) {
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
    }
  };

  return (
    <button className={getStyles(type)}>
      <Icon type={type} />
    </button>
  );
}

export default Button;
