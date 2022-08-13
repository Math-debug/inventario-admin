import axios from '../plugins/axios'

export default class inventoryService{
   status(){
       return axios.get('/inventory/status')
   }
   createInventory(body){
    return axios.post('/inventory',body)
    }
    finishInventory(){
    return axios.post('inventory/finish')
    }
    lastInventory(){
        return axios.get('/inventory/get')
    }
}