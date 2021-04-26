import ac from "../actions/actionTypes";

const initialState = {
    error: null,
    token: null,
    id: null,
    loading: false
}

export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case ac.REMOVE_ERROR:
            return {...state, error: null}
        case ac.REGISTER_USER_START:
            return {...state, loading: true};
        case ac.REGISTER_USER_SUCCESS:
            return {...state, loading: false, token: action.payload};
        case ac.REGISTER_USER_ERROR:
            return {...state, loading: false, error: action.payload};
        case ac.LOG_USER_SUCCESS:
            return {...state, loading: false, token: action.payload}
        case ac.LOG_USER_START:
            return {...state, loading: true}
        case ac.LOG_USER_ERROR:
            return {...state, loading: false, error: action.payload}
        case ac.LOG_USER_OUT:
            return {...initialState};
        case ac.SET_USER_ID:
            return {...state, id: action.payload}
        default:
            return {...state}
    }
}