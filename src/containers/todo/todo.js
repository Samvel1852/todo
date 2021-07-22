import React, { Component } from "react";
import Cards from "../../components/cards/cards";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import styles from "./todo.module.css";

class Todo extends Component {
  static id = 3;
  state = {
    mainList: [],
    lists: [],
    currentCardValue: "",
    mainInputValue: "",
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
    // console.log(this.state.mainInputValue, this.state.currentCardValue);
    this.setState({
      lists: newLists,
      mainList: newLists,
      currentCardValue: this.state.mainInputValue,
      mainInputValue: "",
    });
  };

  handleEditCard = (cardId) => {
    const newLists = [...this.state.lists];
    let currentCard = newLists.find((item) => item.id === cardId);
    currentCard.editing = !currentCard.editing;
    this.setState({ lists: newLists });
  };

  handleCardInputChange = (e) => {
    this.setState({ currentCardValue: e.target.value });
  };

  handleDeleteCard = (cardId) => {
    const newList = [...this.state.lists];
    const newFilteredList = newList.filter((item) => item.id !== cardId);
    this.setState({ lists: newFilteredList, mainList: newFilteredList });
  };

  handleMainInputValue = (e) => {
    this.setState({ mainInputValue: e.target.value });
  };

  handleActiveDoneToggle = (cardId) => {
    const newLists = [...this.state.lists];
    let currentCard = newLists.find((item) => item.id === cardId);
    currentCard.done = !currentCard.done;
    this.setState({ lists: newLists });
  };

  onlyActiveCards = () => {
    this.setState({
      lists: this.state.mainList.filter((card) => card.done === false),
    });
  };

  allCards = () => {
    this.setState({
      lists: this.state.mainList,
    });
  };

  onlyCompletedCards = () => {
    this.setState({
      lists: this.state.mainList.filter((card) => card.done === true),
    });
  };

  render() {
    return (
      <>
        <div className={styles.AddTodoDiv}>
          <Input
            handleMainInputValue={this.handleMainInputValue}
            type="addTodo"
            mainInputValue={this.state.mainInputValue}
          />
          <Button onClickHandler={this.createTodo} type="Add" />
        </div>
        <div className={styles.AllActiveCompletedBtnsDiv}>
          <Button onClickHandler={this.allCards} type="All" />
          <Button onClickHandler={this.onlyActiveCards} type="Active" />
          <Button onClickHandler={this.onlyCompletedCards} type="Completed" />
        </div>
        <Cards
          handleDeleteCard={this.handleDeleteCard}
          handleCardInputChange={this.handleCardInputChange}
          tasks={this.state.lists}
          editingHandler={this.editingHandler}
          handleEditCard={this.handleEditCard}
          currentCardValue={this.state.currentCardValue}
          handleActiveDoneToggle={this.handleActiveDoneToggle}
        />
        )
      </>
    );
  }
}

export default Todo;
