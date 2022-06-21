import axios from '../plugins/axios'

export default class UserGroupService{
    getGroups(){
        return axios.get('/userGroup')
    }
}