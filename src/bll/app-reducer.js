import {API} from "../dal/api";

const initialState = {
    status: 'idle',
    appMessageStatus: "",
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-APP-MESSAGE-STATUS':
            return {...state, appMessageStatus: action.message}
        default:
            return {...state}
    }
}

export const setAppMessageStatusAC = (message) => ({type: 'APP/SET-APP-MESSAGE-STATUS', message})
export const setAppStatusAC = (status) => ({type: 'APP/SET-STATUS', status})

export const sendMessageTC = (data) => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    API.sendMessage(data)
        .then((res) => {
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppMessageStatusAC("The message was sent to Andrey!"))
            setTimeout(() => {
                dispatch(setAppMessageStatusAC(""))
            }, 8000)

        })
        .catch((err) => {
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppMessageStatusAC("Error: server not responding, message was not sent to Andrey"))
            setTimeout(() => {
                dispatch(setAppMessageStatusAC(""))
            }, 8000)
        })
}
