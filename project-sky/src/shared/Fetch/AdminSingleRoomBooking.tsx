import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"

export const fetchAdminSingleRoomBooking = () => {
  var result = axios.get(`https://localhost:7054/api/Booking/getGroupsBookedToRoom`)
    .then((response) => {
      return response.data
    })
    .catch(err => console.log(err))
  
  return result
}

export const fetchDeleteBooking = (ID : any) => {
  var result = axios.delete(`https://localhost:7054/api/Booking/deleteGroupToRoomBooking?Id=${ID}`, {
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
  console.log(data)
  debugger
  var result = axios.post(`https://localhost:7054/api/Booking/postGroupToRoom`, data, {
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