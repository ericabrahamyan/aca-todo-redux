const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/add":
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      };
    case "todo/edit":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id !== action.payload.itemId) return { ...item };
          return { ...item, task: action.payload.newValue };
        }),
      };
    case "todo/delete":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.itemId),
      };
    case "todo/toggleComplete":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id !== action.payload.itemId) return { ...item };
          return { ...item, isCompleted: !item.isCompleted };
        }),
      };
    default:
      return state;
  }
};

export default reducer;
