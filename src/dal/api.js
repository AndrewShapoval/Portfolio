import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
})

export const API = {
    sendMessage(data) {
        return instance.post("sendMessage", {data});
    },
}