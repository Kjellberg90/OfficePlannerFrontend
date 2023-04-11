import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"
import instance from "./baseURL"

export const FetchPutBookings = (data: any, weekNumber: number) => {
    var result = axios.put(`${instance}api/Schedule/UpdateBookings/${weekNumber}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + GetCookie("token"),
      }
    })
    return result
}

export const FetchGetSchedules = () => {
  var result = axios.get(`${instance}api/Schedule/GetSchedules/`,{
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch(err => console.log(err));

  return result;
}

export const FetchGetTotalWeeks = (scheduleId: number) => {
  var result = axios.get(`${instance}api/Schedule/schedule-weeks/${scheduleId}`, {
    headers: {
      "Content-Type": "application/json"
    } 
  })
  .then((response) => {
    return response.data;
  })
  .catch((err) => {
    console.log(err)
  })

  return result;
}

  