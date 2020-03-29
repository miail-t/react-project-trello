const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ACTUAL_USER":
      return action.user;
    default:
      return state;
  }
};
