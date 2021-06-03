import todoSvc from "../../services/todoSvc";
import { fetchTodosAction } from "../reducers/todoReducer";

export const fetchTodos = () => {
  return async (dispatch) => {
    const data = await todoSvc.fetchTodos();
    dispatch(fetchTodosAction(data));
  };
};
