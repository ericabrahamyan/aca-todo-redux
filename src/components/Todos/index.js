import { Component } from "react";
import CreateTodo from "./CreateTodo";
import "./index.css";
import TodoList from "./TodoList";

class Todos extends Component {
  state = {
    items: [
      {
        id: 123123,
        task: "Write Todo App",
        isCompleted: false,
      },
    ],
  };

  onCreate = (todo) => {
    this.setState((state) => ({
      items: [...state.items, todo],
    }));
  };

  onDelete = (itemId) => {
    this.setState((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    }));
  };

  onEdit = (newValue, itemId) => {
    this.setState((state) => ({
      items: state.items.map((item) => {
        if (item.id !== itemId) return { ...item };
        return { ...item, task: newValue };
      }),
    }));
  };

  onToggleComplete = (itemId) => {
    this.setState((state) => ({
      items: state.items.map((item) => {
        if (item.id !== itemId) return { ...item };
        return { ...item, isCompleted: !item.isCompleted };
      }),
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <div className="todo">
        <CreateTodo onCreate={this.onCreate} />

        <TodoList
          items={items}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
          onToggleComplete={this.onToggleComplete}
        />
      </div>
    );
  }
}

export default Todos;
