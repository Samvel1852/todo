import React, { useRef } from "react";
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
  description,
}) => {
  const inputRef = useRef(null);
  return (
    <div className={done ? styles.DoneCard : styles.Card}>
      <textarea
        onClick={() => handleActiveDoneToggle(taskId)}
        type="textarea"
        className={styles.Text}
        readOnly={editing}
        defaultValue={description}
        onChange={(e) => handleCardInputChange(e)}
        ref={inputRef}
      />
      {editing ? (
        <Button
          // editing={editing}
          onClickHandler={() => [
            handleEditCard(taskId),
            inputRef.current.focus(),
          ]}
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
