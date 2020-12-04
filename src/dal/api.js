import axios from 'axios'

const instance = axios.create({
    baseURL: "https://my-smtp-node-js-server.herokuapp.com/",
})

export const API = {
    sendMessage(data) {
        return instance.post("sendMessage", {data});
    },
}