import axios from "axios";

const Api = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public/"
})

export default Api;