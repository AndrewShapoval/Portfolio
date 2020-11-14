import {API} from "../dal/api";

const initialState = {
    status: 'idle',
    error: null,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return {...state}
    }
}

export const setAppErrorAC = (error) => ({type: 'APP/SET-ERROR', error})
export const setAppStatusAC = (status) => ({type: 'APP/SET-STATUS', status})

export const sendMessageTC = (data) => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    API.sendMessage(data)
        .then((res) => {
            const res1 = res

        })
        .catch((err) => {
            const err1 = err
        })
        .finally(() => {
            dispatch(setAppStatusAC('succeeded'))
        })
}
