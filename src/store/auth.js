import jwt_decode from "jwt-decode";
import axios from "axios";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const FORM_MODALKA = "@auth/FORM_MODALKA";
export const ADD_BASKET_BUTTON = "@auth/ADD_BASKET_BUTTON";
export const GO_TO_PAGE_REGISTRATION = "@auth/GO_TO_PAGE_REGISTRATION";
const SET_AUTH = "@auth/SET_AUTH";
const SET_USER = "@auth/SET_USER";
const GET_USER = "@auth/GET_USER";
const UPDATE_LOGIN = "UPDATE_LOGIN";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";

const defaultState = {
  activeModalka: false,
  basketButton: false,
  activeRegistration: false,
  isAuth: false,
  user: {},
  users: [],
  email: "",
  password: "",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FORM_MODALKA:
      return {
        ...state,
        activeModalka: action.payload,
      };
    case ADD_BASKET_BUTTON:
      return {
        ...state,
        basketButton: action.payload,
      };
    case GO_TO_PAGE_REGISTRATION:
      return {
        ...state,
        activeRegistration: action.payload,
      };
    case SET_AUTH: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case GET_USER: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case UPDATE_LOGIN: {
      return { ...state, email: action.email };
    }
    case UPDATE_PASSWORD: {
      return { ...state, password: action.password };
    }
    default:
      return state;
  }
};

export function setIsAuth(bool) {
  return { type: SET_AUTH, payload: bool };
}

export function getUsers() {
  return (dispatch) => {
    axios.get("/api/v1/users").then(({ data }) => {
      dispatch({ type: GET_USER, payload: data });
    });
  };
}

export function Registration(email, password) {
  return (dispatch) => {
    axios
      .post("/api/v1/user/registration", { email, password, role: "USER" })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        const user = jwt_decode(data.token);
        dispatch({ type: SET_USER, payload: user });
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };
}
export function Login(email, password) {
  return (dispatch) => {
    axios
      .post("/api/v1/user/login", { email, password })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        const user = jwt_decode(data.token);
        dispatch({ type: SET_USER, payload: user });
        if (localStorage.getItem("token")) {
          dispatch({ type: SET_AUTH, payload: true });
          history.push("/private");
        }
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };
}
export function CheckUser() {
  return (dispatch) => {
    axios
      .get("/api/v1/user/admin")
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        const user = jwt_decode(data.token);

        dispatch({ type: SET_USER, payload: user });
      })
      .catch((e) => {
        console.log("hjhjkhkjhkhkj", e);
      });
  };
}

export function updateEmailField(email) {
  return { type: UPDATE_LOGIN, email };
}

export function updatePasswordField(password) {
  return { type: UPDATE_PASSWORD, password };
}

export const setActiveModalka = (boolean) => ({
  type: FORM_MODALKA,
  payload: boolean,
});
export const setBasketButton = (boolean) => ({
  type: ADD_BASKET_BUTTON,
  payload: boolean,
});
export const setActiveRegistration = (boolean) => ({
  type: GO_TO_PAGE_REGISTRATION,
  payload: boolean,
});
