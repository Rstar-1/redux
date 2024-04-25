import axios from "axios";
import {store} from "../redux/Store";

const baseURL = process.env.REACT_BASE_URL;

const API = axios.create({
    baseURL,
    headers: {
        'comunity-name': process.env.REACT_COMUNITY_NAME,
        accept : 'application/json',
    }
});

export default API;