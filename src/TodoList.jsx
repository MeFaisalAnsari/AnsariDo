import React from "react";
import FlipMove from "react-flip-move";
import TodoItem from "./TodoItem";

const TodoList = ({ items, toggleChecked, editItem, deleteItem }) => {
  return (
    <FlipMove enterAnimation="fade" leaveAnimation="fade">
      {[...items].reverse().map(({ id, name, isChecked }) => {
        return (
          <TodoItem
            key={id}
            id={id}
            name={name}
            toggleChecked={toggleChecked}
            isChecked={isChecked}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        );
      })}
    </FlipMove>
  );
};

export default TodoList;
