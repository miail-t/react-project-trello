import * as action from "../action-type";

export function addUser(user) {
  return { type: action.ADD_USER, user };
}
export function updateUser(user) {
  return { type: action.UPDATE_ACTUAL_USER, user };
}
export function editColumnName(column) {
  return { type: action.EDIT_NAME_COLUMN, column };
}
export function addCard(card) {
  return { type: action.ADD_CARD, card };
}
export function deleteCard(id) {
  return { type: action.DELETE_CARD, id };
}
export function editCard(id, name, description) {
  return { type: action.EDIT_CARD, id, name, description };
}
export function addComment(comment) {
  return { type: action.ADD_COMMENT, comment };
}
export function deleteComment(id) {
  return { type: action.DELETE_COMMENT, id };
}
export function editComment(id, text) {
  return { type: action.EDIT_COMMENT, id, text };
}
