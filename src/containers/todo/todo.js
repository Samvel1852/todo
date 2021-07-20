import React, { Component } from "react";
import Cards from "../../components/cards/cards";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import styles from "./todo.module.css";

class Todo extends Component {
  static id = 3;
  state = {
    lists: [],
  };

  createTodo = () => {
    const newLists = [...this.state.lists];
    let newTodo = {
      description: "",
      id: Todo.id++,
      done: false,
      editing: true,
    };
    newLists.push(newTodo);
    this.setState({ lists: newLists });
  };

  handleEditCard = (cardId) => {
    const newLists = [...this.state.lists];
    let currentCard = newLists.find((item) => item.id === cardId);
    currentCard.editing = !currentCard.editing;
    this.setState({ lists: newLists });
  };

  render() {
    return (
      <>
        <div className={styles.AddTodoDiv}>
          <Input type="addTodo" />
          <Button onClickHandler={this.createTodo} type="Add" />
        </div>
        <Cards
          tasks={this.state.lists}
          editingHandler={this.editingHandler}
          handleEditCard={this.handleEditCard}
        />
        )
      </>
    );
  }
}

export default Todo;
