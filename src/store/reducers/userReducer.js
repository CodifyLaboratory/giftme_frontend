import ac from "../actions/actionTypes";

const initialState = {
    loading: false,
    error: null,
    email: "",
    id: null,
    first_name: "",
    last_name: "",
    description: "",
    birth_date: "",
    facebook_link: "",
    instagram_link: "",
    holidays: [],
    wishes: []
}

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case ac.SET_USER_DATA_SUCCESS:
            return {...state,
                loading: false,
                email: action.payload.email,
                id: action.payload.id,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                description: action.payload.description,
                birth_date: action.payload.birth_date,
                facebook_link: action.payload.facebook_link,
                instagram_link: action.payload.instagram_link,
            }
        case ac.SET_USER_DATA_START:
            return {...state, loading: true}
        case ac.SET_USER_DATA_ERROR:
            return {...state, loading: false, error: action.payload}
        case ac.USER_DATA_REMOVE:
            return {...initialState}
        case ac.SET_HOLIDAY_START:
            return {...state, loading: true}
        case ac.SET_HOLIDAY_SUCCESS:
            return {...state, loading: false, holidays: action.payload}
        case ac.SET_HOLIDAY_ERROR:
            return {...state, loading: false, error: action.payload}
        case ac.SET_WISHES_ERROR:
            return {...state, loading: false, error: action.payload}
        case ac.SET_WISHES_START:
            return {...state, loading: true}
        case ac.SET_WISHES_SUCCESS:
            return {...state, loading: false, wishes: action.payload}
        default:
            return {...state}
    }
}