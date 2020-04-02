import { createSelector } from "reselect";

export const getActualUser = state => {
  return state.actualUser;
};
export const getCards = state => {
  return state.cards;
};
export const getUsers = state => {
  return state.users;
};
export const getColumns = state => {
  return state.column;
};
export const getComments = state => {
  return state.comments;
};
/* export const getSuper = createSelector( getActualUser,
    (actualUser) => {
        return 
    }
) */