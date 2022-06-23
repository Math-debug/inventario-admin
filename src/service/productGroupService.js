import axios from '../plugins/axios'

export default class productGroupService{
    getProductGroup(){
        return axios.get('/group/product')
    }
    createProductGroup(body){
        return axios.post('/group/product',body)
    }
}