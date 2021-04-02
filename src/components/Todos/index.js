import { useDispatch, useSelector } from "react-redux";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import "./index.css";

const Todos = (props) => {

  const items = useSelector(state => state.todos)
  const dispatch = useDispatch();

  const onCreate = (todo) => {
    dispatch({
      type: "todo/add",
      payload: {
        todo,
      },
    });
  };

  const onDelete = (itemId) => {
    dispatch({
      type: "todo/delete",
      payload: {
        itemId,
      },
    });
  };

  const onEdit = (newValue, itemId) => {
    dispatch({
      type: "todo/edit",
      payload: {
        newValue,
        itemId,
      },
    });
  };

  const onToggleComplete = (itemId) => {
    dispatch({
      type: "todo/toggleComplete",
      payload: {
        itemId,
      },
    });
  };

  return (
    <div className="todo">
      <CreateTodo onCreate={onCreate} />

      <TodoList
        items={items}
        onDelete={onDelete}
        onEdit={onEdit}
        onToggleComplete={onToggleComplete}
      />
    </div>
  );
};

export default Todos;
