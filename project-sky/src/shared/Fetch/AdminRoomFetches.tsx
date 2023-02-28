import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"

export const fetchAdminRooms = () => {
  var result = axios.get(`https://localhost:7054/api/Room/adminGetRooms`
  , {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }
  }
  )
    .then((response) => {
      return response.data
    })
    .catch(err => console.log(err))
  
  return result
}

export const fetchDeleteRoom = (data : any) => {
  var result = axios.delete(`https://localhost:7054/api/Room/adminDeleteRooms`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer " + GetCookie("token"),
    }, 
    data
  }
  )
    .catch(err => console.log(err))
  
    return result
}

export const fetchPutRoom = (data: any, roomId: number) => {
  var result = axios.put(`https://localhost:7054/api/Room/adminroomEditRoom?roomId=${roomId}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }
  })
  .catch(err => console.log(err))

  return result
}

export const fetchPostNewRooom = (data: any) => {
  var result = axios.post(`https://localhost:7054/api/Room/adminAddRooms`, data, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer " + GetCookie("token"),
    }
  }
  )
    .catch(err => console.log(err))
  
    return result
}

