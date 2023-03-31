import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"
import instance from "./baseURL"

export const fetchAdminSingleRoomBooking = () => {
  var result = axios.get(`${instance}api/AdminRoomBooking/getGroupsBookedToRoom`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
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

export const fetchDeleteBooking = (ID : any) => {
  var result = axios.delete(`${instance}api/AdminRoomBooking/deleteGroupToRoomBooking?Id=${ID}`, {
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

export const fetchDeleteOldBookings = () => {
  var result = axios.delete(`${instance}api/AdminRoomBooking/deleteOldSingleRoomBookings`, {
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

export const fetchPostNewBooking = (data: any) => {
  var result = axios.post(`${instance}api/AdminRoomBooking/postGroupToRoom`, data, {
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

export const fetchPutBooking = (id: any , data: any) => {
  var result = axios.put(`${instance}api/AdminRoomBooking/EditGroupToRoomBooking?Id=${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }
  })
  .catch(err => console.log(err))

  return result
}