

const initialState = [
  { id: 0, text: "q" },
  { id: 1, text: "w" },
  { id: 2, text: "e" },
  { id: 3, text: "r" }
];

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
