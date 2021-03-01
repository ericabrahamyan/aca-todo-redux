import { Component } from "react";
import { connect } from "react-redux";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import "./index.css";

class Todos extends Component {

  onCreate = (todo) => {
    this.props.dispatch({
      type: 'todo/add',
      payload: {
        todo
      }
    })
  };

  onDelete = (itemId) => {
    this.props.dispatch({
      type: 'todo/delete',
      payload: {
        itemId
      }
    })
  };

  onEdit = (newValue, itemId) => {
    this.props.dispatch({
      type: 'todo/edit',
      payload: {
        newValue,
        itemId
      }
    })
  };

  onToggleComplete = (itemId) => {
    this.props.dispatch({
      type: 'todo/toggleComplete',
      payload: {
        itemId
      }
    })
  };

  render() {
    const { todos: items } = this.props;

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

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Todos) ;
