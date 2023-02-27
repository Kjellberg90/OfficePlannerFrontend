import axios from "axios"

export const fetchGroups = () => {
  var result = axios.get(`https://localhost:7054/api/Group/GetGroups`)
    .then((response) => {
      return response.data
    })
    .catch(err => console.log(err))
  
  return result
}