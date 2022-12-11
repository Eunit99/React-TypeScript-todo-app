import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span
          className="task-name"
        >
          {task.taskName}</span>
        <span
          className="duedate"
        >
          {task.duedate}</span>
        <button
          className="m-y-0 complete-task"
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
