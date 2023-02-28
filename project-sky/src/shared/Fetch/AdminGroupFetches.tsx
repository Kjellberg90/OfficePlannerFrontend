import axios from "axios"

export const fetchGroups = () => {
  var result = axios.get(`https://localhost:7054/api/Group/GetGroups`)
    .then((response) => {
      return response.data
    })
    .catch(err => console.log(err))
  
  return result
}

export const fetchPostNewGroup = (data: any) => {
  var result = axios.post(`https://localhost:7054/api/Group/AddGroup`, data, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  )
    .catch(err => console.log(err))
  
    return result
}

export const fetchDeleteGroup = (currentGroupId: number) => {
  var result = axios.delete(`https://localhost:7054/api/Group/DeleteGroup/${currentGroupId}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }
  )
    .catch(err => console.log(err))
  
    return result
}

export const fetchPutGroup = (data: any, groupId: number) => {
  debugger
  var result = axios.put(`https://localhost:7054/api/Group/UpdateGroup/${groupId}`, data, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  .catch(err => console.log(err))

  return result
}

