import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"

export const fetchAdminSingleRoomBooking = () => {
  var result = axios.get(`https://localhost:7054/api/Booking/getGroupsBookedToRoom`, {
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

export const fetchDeleteOldBookings = () => {
  var result = axios.delete(`https://localhost:7054/api/Booking/deleteOldSingleRoomBookings`, {
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

export const fetchPutBooking = (id: any , data: any) => {
  var result = axios.put(`https://localhost:7054/api/Booking/EditGroupToRoomBooking?Id=${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }
  })
  .catch(err => console.log(err))

  return result
}