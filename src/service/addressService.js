import axios from '../plugins/axios'

export default class addressService{
    getAddress(){
        return axios.get('/address')
    }
    createAddress(body){
        return axios.post('/address',body)
    }
}