const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORIES':
      return [
        ...state, action.payload
      ]
    default:
      return state;
  }
}

export default categoryReducer;