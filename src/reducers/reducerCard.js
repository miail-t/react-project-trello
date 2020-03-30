const initialState = [
  {
    id: "1",
    name: "qwe",
    text: "fdf",
    columnName: "dfs",
    autor: "Weq",
    columnId: "1"
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      console.log(action.card);
      return [...state, action.card];
    default:
      return state;
  }
};
