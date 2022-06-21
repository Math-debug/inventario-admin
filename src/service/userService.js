import axios from '../plugins/axios'

export default class UserGroupService{
    getUsers(){
        return axios.get('/user')
    }
}