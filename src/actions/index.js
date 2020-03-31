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
export function deleteCard(id) {
  return { type: "DELETE_CARD", id };
}
export function editCard(id, name, description) {
  return { type: "EDIT_CARD", id, name, description };
}
export function addComment(comment) {
  return { type: "ADD_COMMENT", comment };
}
export function deleteComment(id) {
  return { type: "DELETE_COMMENT", id };
}
export function editComment(id, text) {
  return { type: "EDIT_COMMENT", id, text };
}
