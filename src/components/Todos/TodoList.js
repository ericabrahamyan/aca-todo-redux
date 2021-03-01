import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, onEdit, onDelete, onToggleComplete } = this.props;

    if (!items.length) return <p>There is no items</p>;
    return (
      <>
        {items.map((item) => (
          <TodoItem 
          key={item.id} 
          item={item} 
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleComplete={onToggleComplete}
          />
        ))}
      </>
    );
  }
}

export default TodoList;
