import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"
import instance from "./baseURL"


export const fetchRooms = (currentDate: string) => {
  var result = axios.get(`${instance}api/Room/get-rooms-info?date=${currentDate}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }})
    .then((response) => {
      return response.data
    })
    .catch(err => console.log(err))
  
  return result
}

export const fetchSingleBookings = (currentDate: string, roomId: number) => {
  var result = axios.get(`https://localhost:7054/api/SingleBooking/GetSingleBookings?date=${currentDate}&roomId=${roomId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }})
    .then((response) => {
      return response.data
    })
    .catch(err => console.log(err))
  
  return result
}

export const fetchDeleteSingleBookings = (data: any) => {
  const userData = data
  var result = axios.delete(`https://localhost:7054/api/SingleBooking/DeleteSingleBooking`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer " + GetCookie("token"),
    },
    data: userData
  })
  
  return result.then((res) => {return res});
}

export const fetchPostSingleBookings = (data: any) => {
  const userData = data
  var result = axios.post(`https://localhost:7054/api/SingleBooking/SingleBooking`, userData, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer " + GetCookie("token"),
    }
  }
  )  
    return result
}