import axios from "../../axios";
import ac from "./actionTypes";
import {userLogout} from "./authAction";


export const getAllUsersFetch = () => async (dispatch) => {
    try{
        dispatch(setAllUsersStart())
        const response = await axios.get('/users/')
        dispatch(setAllUsersSuccess(response.data))
    } catch (err) {
        if(err.response.status === 401) {
            dispatch(setAllUsersError(err.response.data))
            dispatch(userLogout())
        }
    }
}


const setAllUsersSuccess = (users) => ({type:ac.ALL_USERS_SUCCESS, payload: users})
const setAllUsersStart = () => ({type:ac.ALL_USERS_START})
const setAllUsersError = (e) => ({type:ac.ALL_USERS_ERROR, payload: e})
export const removeAllUsers = () => ({type:ac.ALL_USERS_REMOVE})