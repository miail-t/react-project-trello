const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEM":
      console.log("sdf");
      return [...state];
    case "DELETE_ITEM":
      const newState = state.filter(item => item.text !== action.item);

      console.log("DELETE" + newState);
      return newState;
    default:
      return state;
  }
};
