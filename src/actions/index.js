import * as action from "../action-type";

export function addUser(user) {
  return { type: "ADD_USER", user };
}
export function updateUser(user) {
  return { type: "UPDATE_ACTUAL_USER", user };
}
export function editColumnName(column) {
  return { type: "EDIT_NAME_COLUMN", column };
}
export function addCard(card) {
  return { type: "ADD_CARD", card };
}

