const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [...state, action.card];
    case "DELETE_CARD": {
      const newState = state.filter(elem => action.id !== elem.id);
      return newState;
    }
    case "EDIT_CARD": {
      const newState = state.map(elem => {
        if (elem.id === action.id) {
          return {
            ...elem,
            name: action.name,
            description: action.description
          };
        }
        return elem;
      });
      return newState;
    }
    default:
      return state;
  }
};
