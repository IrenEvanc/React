import React from 'react'
const PRODUCT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/products';

class ProductService{

    getAllUsers(){
        return axios.get(PRODUCT_BASE_REST_API_URL)
    }

    createUser(product){
        return axios.post(PRODUCT_BASE_REST_API_URL, product)
    }
}

export default new ProductService();