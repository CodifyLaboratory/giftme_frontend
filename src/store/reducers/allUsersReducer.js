import ac from "../actions/actionTypes";

const initialState = {
    loading: false,
    error: null,
    users: []
}

export const allUsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ac.ALL_USERS_START:
            return{...state, loading: true}
        case ac.ALL_USERS_SUCCESS:
            return {...state, loading: false, users: action.payload}
        case ac.ALL_USERS_ERROR:
            return {...state, loading: false, error: action.payload}
        case ac.ALL_USERS_REMOVE:
            return {...initialState}
        default:
            return {...state}
    }
}