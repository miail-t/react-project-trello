import { combineReducers } from "redux";
import reducersactualUser from "./reducerActualUser";
import reducersCard from "./reducerCard";
import reducersusers from "./reducerUsers";
import reducerscolumn from "./reducerColumn";
import reducerscomments from "./reducerComments";

const rootReducer = combineReducers({
  actualUser: reducersactualUser,
  cards: reducersCard,
  users: reducersusers,
  column: reducerscolumn,
  comments: reducerscomments
});
export default rootReducer;
