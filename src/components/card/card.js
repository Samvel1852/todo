import React from "react";
import styles from "./card.module.css";
import Button from "../../components/button/button";

const Card = ({ description, editing, onInputChange, taskId }) => {
  return (
    <div className={styles.Card}>
      {/*<div className={styles.Wrapper}>
                    <p>
                        {description}
                    </p>
                </div>*/}
      <textarea
        type="textarea"
        className={styles.Text}
        readOnly={editing}
        defaultValue={description}
        onChange={(e) => onInputChange(e, taskId)}
      />
      <Button type="Edit" />
      <Button type="Delete" />
      <Button type="Save" />
    </div>
  );
};

export default Card;
