import { useDispatch, useSelector } from "react-redux";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import "./index.css";
import { useEffect } from "react";
import { createAddTodoAction } from "../../store/reducers/todoReducer";
import { fetchTodos } from "../../store/asyncActions/todos";

const Todos = (props) => {

  const items = useSelector(state => state.todos)
  const dispatch = useDispatch();

  const onCreate = (todo) => {
    dispatch(createAddTodoAction(todo));
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

  const handleFetchTodosClick = () => {
    dispatch(fetchTodos())
  }

  return (
    <div className="todo">
      <CreateTodo onCreate={onCreate} />

      <TodoList
        items={items}
        onDelete={onDelete}
        onEdit={onEdit}
        onToggleComplete={onToggleComplete}
      />

      <button onClick={handleFetchTodosClick}>
        Fetch Todos
      </button>
    </div>
  );
};

export default Todos;
