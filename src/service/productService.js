import axios from '../plugins/axios'

export default class productService{
    getProduct(){
        return axios.get('/product')
    }
    createProduct(body){
        return axios.post('/product',body)
    }
}