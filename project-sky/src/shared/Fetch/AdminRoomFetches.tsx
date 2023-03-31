import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"
import instance from "./baseURL"

export const fetchAdminRooms = () => {
  var result = axios.get(`${instance}api/AdminRoom/adminGetRooms`
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
  var result = axios.delete(`${instance}api/AdminRoom/adminDeleteRooms`, {
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
  var result = axios.put(`${instance}api/AdminRoom/adminroomEditRoom?roomId=${roomId}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }
  })
  .catch(err => console.log(err))

  return result
}

export const fetchPostNewRooom = (data: any) => {
  var result = axios.post(`${instance}api/AdminRoom/adminAddRooms`, data, {
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

