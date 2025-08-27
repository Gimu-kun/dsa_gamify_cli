import axios from "axios"
const Port = 8080
const BaseUrl = `http://localhost:${Port}`
const Client = axios.create({
    baseURL: BaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 5000,
})

export default Client;