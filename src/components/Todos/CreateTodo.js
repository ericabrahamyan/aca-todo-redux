import { useState } from "react";
import { v4 as uuid } from "uuid";

const CreateTodo = (props) => {
  const [taskValue, setTaskValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setTaskValue(value);
  };

  const handleCreate = () => {
    const todo = {
      id: uuid(),
      task: taskValue,
      isCompleted: false,
    };

    props.onCreate(todo);
    setTaskValue("");
  };

  return (
    <>
      <h2>Create Todos</h2>
      <input
        type="text"
        placeholder="write task"
        value={taskValue}
        onChange={handleChange}
      />
      <button className="create-todo-btn" onClick={handleCreate}>
        Create
      </button>
    </>
  );
};

export default CreateTodo;
