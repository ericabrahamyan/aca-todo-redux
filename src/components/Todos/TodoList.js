import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { items, onEdit, onDelete, onToggleComplete } = props;

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
};

export default TodoList;
