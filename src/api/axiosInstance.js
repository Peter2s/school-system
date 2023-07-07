import axios from "axios";
const instance = axios.create({
    baseURL: 'https://localhost:7247/api/v1'
});
export default instance;
