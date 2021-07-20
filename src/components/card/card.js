import React from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import styles from "./card.module.css";

const Card = ({
  description,
  editing,
  taskId,
  handleEditCard,
  handleCardInputChange,
  handleDeleteCard,
}) => {
  return (
    <div className={styles.Card}>
      <textarea
        type="textarea"
        className={styles.Text}
        readOnly={editing}
        defaultValue={description}
        onChange={(e) => handleCardInputChange(e)}
        autoFocus
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
      <Button onClickHandler={() => handleDeleteCard(taskId)} type="Delete" />
    </div>
  );
};

export default Card;
