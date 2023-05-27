import React from "react";
import { useState } from "react";
import axios from "axios";
import deleteIcon from "../components/assets/deleteIcon.png";

function Todo(props) {
  // const [checkBoxValue, setCheckBoxValue] = useState(props.todo.isCompleted)

  function updateTodoStatus() {
    axios
      .post("https://localhost:7137/api/Todo/UpdateTask", {
        text: props.todo.text,
        id_User: props.userId,
        id: props.todo.id,
        isCompleted: !props.todo.isCompleted,
      })
      .then((result) => {
        // setCheckBoxValue((prev)=>!prev)
        props.onComplete();
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="flex justify-between items-center border-b-2 p-2">
      {props.checkbox && (
        <input
          type="checkbox"
          checked={props.todo.isCompleted}
          onChange={updateTodoStatus}
        ></input>
      )}
      <p className={props.todo.isCompleted ? "line-through" : ""}>
        {props.todo.text}
      </p>
      <button onClick={props.onDelete} className="">
        <img src={deleteIcon} className="w-4"></img>
      </button>
    </div>
  );
}
export default Todo;
