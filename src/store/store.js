import {createStore, combineReducers ,compose, applyMiddleware} from "redux";
import axios from '../axios';
import {authReducer} from "./reducers/authReduser";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer";
import {loadFromLocalStorage, localStorageMiddleware} from "../config/localStorage";
import {allUsersReducer} from "./reducers/allUsersReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer
})

const middlewares = [
    localStorageMiddleware,
    thunk,
]

const persistedState = loadFromLocalStorage();
const store = createStore(rootReducer,persistedState, composeEnhancers(applyMiddleware(...middlewares)))

axios.interceptors.request.use(config => {
    try {
        if (store.getState().auth.token){
        config.headers['Authorization'] = 'Bearer ' + store.getState().auth.token;
        }
    } catch (e) {
        //do nothing
    }
    return config;
})


export default store;