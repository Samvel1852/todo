import Card from "../card/card";

import styles from "./cards.module.css";

const Cards = ({ tasks, editingHandler, handleEditCard }) => {
  return (
    <div className={styles.Cards}>
      <div className={styles.Wrapper}>
        {tasks.map((item) => {
          return (
            <Card
              description={item.description}
              key={String(item.id)}
              editing={item.editing}
              onInputChange={editingHandler}
              taskId={item.id}
              handleEditCard={handleEditCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
