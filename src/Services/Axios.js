import axios from "axios";

const httpRequest = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}

export default httpRequest;