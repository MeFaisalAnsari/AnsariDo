import React, { forwardRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const TodoItem = forwardRef(
  ({ id, name, toggleChecked, isChecked, editItem, deleteItem }, ref) => {
    return (
      <div
        ref={ref}
        className="flex justify-between bg-sky-500 text-white rounded overflow-hidden mt-2"
      >
        <div className="flex gap-2 p-2">
          <button onClick={() => toggleChecked(id)}>
            {isChecked ? <CheckCircleIcon /> : <CircleOutlinedIcon />}
          </button>
          <h4 className={isChecked ? "line-through" : ""}>{name}</h4>
        </div>
        <div className="flex">
          <button
            className="bg-sky-700 text-white p-2"
            onClick={() => editItem(id)}
          >
            <EditIcon />
          </button>
          <button
            className="bg-red-500 text-white p-2"
            onClick={() => deleteItem(id)}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    );
  }
);

export default TodoItem;
