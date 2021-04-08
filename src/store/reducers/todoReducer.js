const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/add":
      return [...state, action.payload.todo];
    case "todo/edit":
      return state.map((item) => {
        if (item.id !== action.payload.itemId) return { ...item };
        return { ...item, task: action.payload.newValue };
      });
    case "todo/delete":
      return state.filter((item) => item.id !== action.payload.itemId);
    case "todo/toggleComplete":
      return state.map((item) => {
        if (item.id !== action.payload.itemId) return { ...item };
        return { ...item, isCompleted: !item.isCompleted };
      });
    case "todo/fetchMany":
      console.log("todo/fetch -> payload", action.payload);
      return action.payload.map((todo) => ({
        task: todo.title,
        id: todo.id,
        isCompleted: todo.completed,
      }));
      return state;
    default:
      return state;
  }
};

export default todoReducer;
export const createAddTodoAction = (todo) => ({
  type: "todo/add",
  payload: { todo },
});
export const fetchTodosAction = (payload) => ({
  type: "todo/fetchMany",
  payload,
});
