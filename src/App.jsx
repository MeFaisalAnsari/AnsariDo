import React, { forwardRef, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

const getLocalData = () => {
  const lists = localStorage.getItem("AnsariDo");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const addItem = () => {
    if (!input) {
      alert("Please enter something...");
    } else {
      const newItem = {
        id: uuid(),
        name: input,
        isChecked: false,
      };
      setItems([...items, newItem]);
      setInput("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      isEditing ? updateItem() : addItem();
    }
  };

  const editItem = (id) => {
    setIsEditing(true);
    const itemToEdit = items.find((item) => item.id === id);
    setInput(itemToEdit.name);
    setEditIndex(id);
  };

  const updateItem = () => {
    if (!input) {
      alert("Please enter something...");
    } else {
      const updatedItems = items.map((item) => {
        if (item.id === editIndex) {
          return { ...item, name: input };
        }
        return item;
      });
      setItems(updatedItems);
      setInput("");
      setIsEditing(false);
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const deleteAllItems = () => {
    setItems([]);
  };

  const toggleChecked = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setItems(updatedItems);
  };

  useEffect(() => {
    localStorage.setItem("AnsariDo", JSON.stringify(items));
  }, [items]);

  return (
    <div className="bg-slate-900 min-h-screen py-20 px-4">
      <h1 className="text-center text-white text-5xl font-bold">AnsariDo</h1>
      <h4 className="text-center uppercase tracking-[3px] text-sm text-slate-300 mt-3">
        Your To-Do Companion
      </h4>
      <div className="max-w-[450px] mx-auto mt-8">
        <TodoInput
          input={input}
          setInput={setInput}
          addItem={addItem}
          isEditing={isEditing}
          updateItem={updateItem}
          handleKeyPress={handleKeyPress}
        />
        <TodoList
          items={items}
          toggleChecked={toggleChecked}
          editItem={editItem}
          deleteItem={deleteItem}
        />

        <div className="text-center mt-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded"
            onClick={deleteAllItems}
          >
            Clear List
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
