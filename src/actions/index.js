import * as action from "../action-type";

export function addUser(user) {
  return { type: "ADD_USER", user };
}
export function updateUser(user) {
  return { type: "UPDATE_ACTUAL_USER", user };
}
