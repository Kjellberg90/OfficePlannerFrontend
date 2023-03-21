import axios from "axios"

export const fetchLogin = (data: any) => {

  var result = axios.post(`https://localhost:7054/api/User/Login`, data, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
  .then((response) => {
    if (response.status === 200) {
      CreateLoginToken(response.data)
      return response.data
    } else {
      return false
    }
  })
  .catch(err => console.log(err))
    return result
}

var CreateLoginToken = (data: any) => {
  const token = data.token
  const expires = new Date(Date.now() + 86400 * 1000).toUTCString();
  document.cookie =  `token=${token};expires=${expires + 86400}`
  // document.cookie =  `token=${token}`
}