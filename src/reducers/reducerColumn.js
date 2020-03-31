const initialState = [
  { id: 1, name: "TODO" },
  { id: 2, name: "In Progress" },
  { id: 3, name: "Testing" },
  { id: 4, name: "Done" }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_NAME_COLUMN": {
      const columns = state.map(elem => {
        if (elem.id === action.column.id) {
          return { ...elem, name: action.column.name };
        }
        return elem;
      });
      return [...columns];
    }
    default:
      return state;
  }
};
