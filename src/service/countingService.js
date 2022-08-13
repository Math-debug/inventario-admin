import axios from '../plugins/axios'

export default class countingService{
   createCounting(body){
    return axios.post('/counting',body)
    }
}