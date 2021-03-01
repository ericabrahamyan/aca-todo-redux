import { Component } from "react";
import { v4 as uuid } from "uuid";

class CreateTodo extends Component {
  state = {
    taskValue: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      taskValue: value,
    });
  };

  handleCreate = () => {
    const todo = {
      id: uuid(),
      task: this.state.taskValue,
      isCompleted: false,
    };

    this.props.onCreate(todo);
    this.setState({
      taskValue: "",
    });
  };

  render() {
    return (
      <>
        <h2>Create Todos</h2>
        <input
          type="text"
          placeholder="write task"
          value={this.state.taskValue}
          onChange={this.handleChange}
        />
        <button className="create-todo-btn" onClick={this.handleCreate}>
          Create
        </button>
      </>
    );
  }
}

export default CreateTodo;
