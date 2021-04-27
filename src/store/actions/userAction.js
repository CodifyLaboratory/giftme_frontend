import axios from "../../axios";
import ac from "./actionTypes";
import {userLogout} from "./authAction";




export const userDataFetch = user => async (dispatch, getState) => {
    const id = getState().auth.id
    try {
        dispatch(setUserDataStart())
        const response = await axios.put(`/users/edit/${id}`, user)
        dispatch(setUserDataSuccess(response.data))

    } catch (err) {
        if(err.response.status === 401) {
            dispatch(setUserDataError(err.response.data))
            dispatch(userLogout())
        }
    }
}


export const getDataFetch = () => async (dispatch, getState) => {
    const id = getState().auth.id
    try{
        dispatch(setUserDataStart())
        const response = await axios.get(`/users/${id}`)
        dispatch(setUserDataSuccess(response.data))
    } catch (err) {
        if(err.response.status === 401) {
            dispatch(userLogout())
            dispatch(removeUserData())
        }
    }
}


export const getHolidaysFetch = () => async (dispatch) => {
    try{
        dispatch(setHolidayStart())
        const response = await axios.get("/own-holidays/")
        dispatch(setHolidaySuccess(response.data))
    }catch (err) {
        if(err.response.status === 401) {
            dispatch(userLogout())
            dispatch(setHolidayError(err.response.data))
        }
    }
}

export const setHolidaysFetch = data => async dispatch => {
    try {
        await axios.post("/holidays/create", data)
        dispatch(getHolidaysFetch())
    }catch (err) {
        if(err.response.status === 401) {
            dispatch(userLogout())
            dispatch(setHolidayError(err.response.data))
        }
    }
}

export const setWishesFetch = formData => async dispatch => {
    try {
        await axios.post("/wishes/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        dispatch(getWishesFetch())
    } catch (err) {
        console.log(err)
        if (err.response.status === 401) {
            dispatch(userLogout())
            dispatch(setWishesError(err.response.data))
        }
    }
}

export const getWishesFetch = () => async dispatch => {
    try {
        dispatch(setWishesStart());
        const response = await axios.get("/own-wishes/")
        dispatch(setWishesSuccess(response.data))
    } catch (err) {
        if (err.response.status === 401) {
            dispatch(userLogout())
            dispatch(setWishesError(err.response.data))
        }
    }
}

const setUserDataStart = () => ({type: ac.SET_USER_DATA_START})
const setUserDataSuccess = (payload) => ({type: ac.SET_USER_DATA_SUCCESS, payload})
const setUserDataError = (e) => ({type: ac.SET_USER_DATA_ERROR, payload: e})
const setHolidayStart = () =>({type:ac.SET_HOLIDAY_START})
const setHolidaySuccess = (holidays) =>({type:ac.SET_HOLIDAY_SUCCESS, payload: holidays})
const setHolidayError = (e) =>({type:ac.SET_HOLIDAY_ERROR, payload: e})
const setWishesStart = () => ({type: ac.SET_WISHES_START})
const setWishesSuccess = (wishes) => ({type: ac.SET_WISHES_SUCCESS, payload: wishes})
const setWishesError = (e) => ({type: ac.SET_WISHES_ERROR, payload: e})
export const removeUserData = () => ({type: ac.USER_DATA_REMOVE})