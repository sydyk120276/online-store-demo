const defaultState = {
  likes: 0,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_LIKES':
      return { ...state, likes: state.likes }
    case 'REMOVE_LIKES':
      return { ...state, likes: state.likes }
    default:
      return state
  }
}