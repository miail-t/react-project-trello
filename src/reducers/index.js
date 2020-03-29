import { combineReducers } from "redux";
import actualUser from "./reducerActualUser";
import reducersCard from "./reducerCard";
import users from "./reducerUsers";
import column from "./reducerColumn";
import comments from "./reducerComments";

const rootReducer = combineReducers({
  actualUser: actualUser,
  card: reducersCard,
  users: users,
  column: column,
  comments: comments
});
export default rootReducer;
