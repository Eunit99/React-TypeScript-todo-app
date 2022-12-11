import React, { FC, ChangeEvent, useState } from "react";
import './App.css';
import { ITask } from "./Interfaces";
import TodoTask from "./Components/TodoTask";


const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [duedate, setDueDate] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDueDate(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, duedate: duedate };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDueDate(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="sidebar">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter task name"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Select due date in number"
            name="duedate"
            value={duedate}
            onChange={handleChange}
          />
          <button
            onClick={addTask}
          >Add Task</button>
        </div>
      </div>

      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask
            key={key}
            task={task}
            completeTask={completeTask}
          />;
        })}
      </div>
    </div>
  );
}

export default App;
