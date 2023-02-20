import axios from "axios" 
export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8081/api/products/getall")
    }

    getProductById(id){
        return axios.get("http://localhost:8081/api/products/getbyid?id="+ id)
    }
} 