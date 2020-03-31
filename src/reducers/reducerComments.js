const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      console.log(action.comment);
      return [...state, action.comment];
    case "DELETE_COMMENT":
      const newState = state.filter(elem => action.id !== elem.id);
      return newState;
    case "EDIT_COMMENT": {
      console.log(action.id)

      const newState = state.map(elem => {
        if (elem.id === action.id) {
          return { ...elem, text: action.text}
        }
        return elem;
      });
      return newState;
    }

    default:
      return state;
  }
};
