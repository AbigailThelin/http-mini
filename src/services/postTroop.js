import axios from 'axios'

function postTroop(recruit){
    return axios.post(('http://localhost:3005/defenses/', {recruit: recruit}))
    .then(response =>{
        return response.status
    })
}

export default postTroop