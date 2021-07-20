import React from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import styles from "./card.module.css";

const Card = ({
  description,
  editing,
  onInputChange,
  taskId,
  handleEditCard,
}) => {
  return (
    <div className={styles.Card}>
      <textarea
        type="textarea"
        className={styles.Text}
        readOnly={editing}
        defaultValue={description}
        onChange={(e) => onInputChange(e, taskId)}
      />

      {editing ? (
        <Button
          // editing={editing}
          onClickHandler={() => handleEditCard(taskId)}
          type="Edit"
        />
      ) : (
        <Button type="Save" onClickHandler={() => handleEditCard(taskId)} />
      )}
      <Button type="Delete" />
    </div>
  );
};

export default Card;
