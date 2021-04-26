import ac from "../store/actions/actionTypes";

const saveToLocalStorage = state => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    }
     catch (e) {
         console.log('not saved to localstorage')
    }
}

export const loadFromLocalStorage = () => {
    try {
        const serializedState = JSON.parse(localStorage.getItem('state'));
        if (serializedState === null) {
            return undefined;
        }
        return serializedState;
    } catch (e) {
        return undefined;
    }
}

const actions = [ac.REGISTER_USER_SUCCESS, ac.LOG_USER_OUT, ac.LOG_USER_SUCCESS, ac.SET_USER_ID];

export const localStorageMiddleware = (store) => next => action => {
    const result = next(action);
    if (actions.includes(action.type)) {
        saveToLocalStorage({
            auth: store.getState().auth,
        })
    }
    return result;
}