const initialState = { username: "eric", password: "11111111" };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user/rename":
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
};

export default userReducer;
