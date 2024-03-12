import axios from "axios";

axios.defaults.baseURL = 'https://snapgram-api-df7c5b682dbd.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true