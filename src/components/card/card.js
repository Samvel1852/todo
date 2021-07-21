import React from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import styles from "./card.module.css";

const Card = ({
  done,
  editing,
  taskId,
  handleEditCard,
  handleCardInputChange,
  handleDeleteCard,
  currentCardValue,
  handleActiveDoneToggle,
}) => {
  return (
    <div className={done ? styles.DoneCard : styles.Card}>
      {console.log(taskId)}
      <textarea
        onClick={() => handleActiveDoneToggle(taskId)}
        type="textarea"
        className={styles.Text}
        readOnly={editing}
        defaultValue={currentCardValue}
        onChange={(e) => handleCardInputChange(e)}
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
