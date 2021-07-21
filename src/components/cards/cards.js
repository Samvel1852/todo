import Card from "../card/card";

import styles from "./cards.module.css";

const Cards = ({
  tasks,
  editingHandler,
  handleEditCard,
  handleCardInputChange,
  handleDeleteCard,
  currentCardValue,
  handleActiveDoneToggle,
}) => {
  return (
    <div className={styles.Cards}>
      <div className={styles.Wrapper}>
        {tasks.map((item) => {
          return (
            <Card
              handleDeleteCard={handleDeleteCard}
              description={item.description}
              key={String(item.id)}
              editing={item.editing}
              onInputChange={editingHandler}
              taskId={item.id}
              handleEditCard={handleEditCard}
              handleCardInputChange={handleCardInputChange}
              currentCardValue={currentCardValue}
              handleActiveDoneToggle={handleActiveDoneToggle}
              done={item.done}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
