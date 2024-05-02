import API from "./factory";

const get = 'products';

const product = route => {
    return `https://fakestoreapi.com/${route}`;
}

export default {
    getproduct() {
        return API.get(product(get))
    }
}