import { useState } from "react";

const TodoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState("");

  const resetEditingState = () => {
    setIsEditing(false);
    setEditedValue("");
  };

  const handleChange = (e) => {
    const { value: editedValue } = e.target;
    setEditedValue(editedValue);
  };

  const handleEditBtnClick = () => {
    setIsEditing(true);
    setEditedValue(props.item.task);
  };

  const handleCancelClick = () => {
    resetEditingState();
  };

  const handleDeleteBtnClick = () => {
    props.onDelete(props.item.id);
  };

  const handleSaveBtnClick = () => {
    props.onEdit(editedValue, props.item.id);
    resetEditingState();
  };

  const handleToggleCompleteBtnClick = () => {
    props.onToggleComplete(props.item.id);
  };

  const { item } = props;

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input type="text" value={editedValue} onChange={handleChange} />

          <div className="todo-action-buttons">
            <button onClick={handleCancelClick}>cancel</button>
            <button onClick={handleSaveBtnClick}>save</button>
          </div>
        </>
      ) : (
        <>
          <span
            className={`todo-item-text ${
              item.isCompleted && "todo-item--completed"
            }`}
            onClick={handleToggleCompleteBtnClick}
          >
            {item.task}
          </span>

          <div className="todo-action-buttons">
            <button onClick={handleEditBtnClick}>edit</button>
            <button onClick={handleDeleteBtnClick}>delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
