import axios from 'axios'

function patchMinions(shortname, id){
    return axios.patch(('http://localhost:3005/'+ shortname + '/minions/' + id, {type: 'frog'}))
    .then(response =>{
        return response.status
    })
}

export default patchMinions