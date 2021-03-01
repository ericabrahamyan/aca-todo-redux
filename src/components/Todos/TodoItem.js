import { Component } from "react";

class TodoItem extends Component {
  state = {
    isEditing: false,
    editedValue: "",
  };

  resetEditingState = () => {
    this.setState({
      isEditing: false,
      editedValue: "",
    });
  };

  handleChange = (e) => {
    const { value: editedValue } = e.target;
    this.setState({ editedValue });
  };

  handleEditBtnClick = () => {
    this.setState((_, props) => ({
      isEditing: true,
      editedValue: props.item.task,
    }));
  };

  handleCancelClick = () => {
    this.resetEditingState();
  };

  handleDeleteBtnClick = () => {
    this.props.onDelete(this.props.item.id);
  };

  handleSaveBtnClick = () => {
    this.props.onEdit(this.state.editedValue, this.props.item.id);
    this.resetEditingState();
  };

  handleToggleCompleteBtnClick = () => {
    this.props.onToggleComplete(this.props.item.id);
  };

  render() {
    const { item } = this.props;
    const { isEditing, editedValue } = this.state;

    return (
      <div className="todo-item">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedValue}
              onChange={this.handleChange}
            />

            <div className="todo-action-buttons">
              <button onClick={this.handleCancelClick}>cancel</button>
              <button onClick={this.handleSaveBtnClick}>save</button>
            </div>
          </>
        ) : (
          <>
            <span
              className={`todo-item-text ${item.isCompleted && "todo-item--completed"}`}
              onClick={this.handleToggleCompleteBtnClick}
            >
              {item.task}
            </span>

            <div className="todo-action-buttons">
              <button onClick={this.handleEditBtnClick}>edit</button>
              <button onClick={this.handleDeleteBtnClick}>delete</button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default TodoItem;
