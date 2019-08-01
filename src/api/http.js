import axios from 'axios'

export const http = axios.create({
    baseURL:'http://localhost:8888/api/private/v1/'
})

http.login = ({username,password})=>{
    return http.post('login',{
        username,
        password
    })
}