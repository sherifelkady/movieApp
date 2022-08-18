const INITIAL_STATE = { favoritList: [] };

export default function favoritsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return { favoritList: [...state.favoritList, action.payload] };
    case "DELETE_FROM_FAVORITES":
      return {
        favoritList: state.favoritList.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
