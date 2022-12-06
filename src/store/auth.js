export const FORM_MODALKA = "@auth/FORM_MODALKA"
export const ADD_BASKET_BUTTON = "@auth/ADD_BASKET_BUTTON"
export const GO_TO_PAGE_REGISTRATION = "@auth/GO_TO_PAGE_REGISTRATION"

const defaultState = {
  activeModalka: false,
  basketButton: false,
  activeRegistration: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FORM_MODALKA:
      return {
        ...state,
        activeModalka: action.payload
      }
    case ADD_BASKET_BUTTON:
      return {
        ...state,
        basketButton: action.payload
      }
    case GO_TO_PAGE_REGISTRATION:
      return {
        ...state,
        activeRegistration: action.payload
      }
    default:
      return state
  }
}

export const setActiveModalka = (boolean) => ({ type: FORM_MODALKA, payload: boolean })
export const setBasketButton = (boolean) => ({ type: ADD_BASKET_BUTTON, payload: boolean })
export const setActiveRegistration = (boolean) => ({ type: GO_TO_PAGE_REGISTRATION, payload: boolean })