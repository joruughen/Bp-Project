import axios from 'axios';


const BACKEND_URL = 'http://54.89.29.247:8080'; //Spring Boot



export const fetchLogin = async (body) => {
    const response = await axios.post(`${BACKEND_URL}/auth/login`, body);
    console.log(response);
    return response;
}
export const fetchRegister = async (body) => {
    const response = await axios.post(`${BACKEND_URL}/auth/signup`, body);
    console.log(response);
    return response;
}

