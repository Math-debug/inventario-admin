import axios from '../plugins/axios'

export default class fileService{
    submit(body,path){
        return axios.post('/file/'+path,body)
    }
}