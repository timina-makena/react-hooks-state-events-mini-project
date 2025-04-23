import React from "react";
import Task from "./Task";

function TaskList({tasks, onDelete}) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        const {category, text} = task;
        return (
        <Task key={index} category={category} text={text} onDelete={onDelete} />
        );
      })}
    </div>
  );
}

export default TaskList;