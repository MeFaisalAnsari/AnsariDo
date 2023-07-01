import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CachedIcon from "@mui/icons-material/Cached";

const TodoInput = ({
  input,
  handleKeyPress,
  isEditing,
  updateItem,
  addItem,
  setInput,
}) => {
  return (
    <div className="flex bg-white rounded overflow-hidden mb-4">
      <input
        type="text"
        className="w-full outline-none px-4 py-2"
        placeholder="Enter an item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      {isEditing ? (
        <button
          type="submit"
          onClick={updateItem}
          className="bg-sky-500 hover:bg-sky-600 text-white p-2"
        >
          <CachedIcon />
        </button>
      ) : (
        <button
          type="submit"
          onClick={addItem}
          className="bg-sky-500 hover:bg-sky-600 text-white p-2"
        >
          <AddIcon />
        </button>
      )}
    </div>
  );
};

export default TodoInput;
