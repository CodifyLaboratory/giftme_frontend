import axios from "../../axios";
import ac from "./actionTypes";


export const signUpFetch = user => async dispatch => {
    try {
        dispatch(registerUserStart());
        const responseId = await  axios.post("/auth/users/", user);
        dispatch(setUserId(responseId.data.id))
        const responseToken = await  axios.post("/auth/jwt/create/", user);
        dispatch(registerUserSuccess(responseToken.data.access));
    } catch (err) {
        err.response.data.email && dispatch(registerUserError(err.response.data.email[0]))
        err.response.data.password && dispatch(registerUserError(err.response.data.password[0]))
    }
}


export const loginFetch = user => async (dispatch) => {
    try{
        dispatch(loginUserStart());
        const responseToken = await axios.post("/auth/jwt/create", user);
        await dispatch(loginUserSuccess(responseToken.data.access));
        const responseId = await axios.get('/auth/users/me')
        dispatch(setUserId(responseId.data.id))

    } catch(err) {
        err.response.data.detail && dispatch(loginUserError(err.response.data.detail))
    }
}


const registerUserStart = () => ({type: ac.REGISTER_USER_START});
const registerUserSuccess = (token) => ({type: ac.REGISTER_USER_SUCCESS, payload: token});
const registerUserError = (e) => ({type: ac.REGISTER_USER_START, payload: e});
const loginUserStart = () => ({type: ac.LOG_USER_START});
const loginUserSuccess = (token) => ({type: ac.LOG_USER_SUCCESS, payload: token});
const loginUserError = (e) => ({type:ac.LOG_USER_ERROR, payload: e})
const setUserId = (id) => ({type:ac.SET_USER_ID, payload: id})
export const removeError = () => ({type: ac.REMOVE_ERROR})

export const userLogout = () => ({type: ac.LOG_USER_OUT});



