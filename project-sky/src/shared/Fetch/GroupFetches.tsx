import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"

export const fetchGroups = () => {
  var result = axios.get(`https://localhost:7054/api/Group/GetGroups`, {
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

export const fetchWeekAndDay = (currentDate: string) => {
  var result = axios.get(`https://localhost:7054/api/Group/GetCurrentWeekAndDay?date=${currentDate}`, {
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

export const fetchWeeklyGroupSchedule = (currentDate: string, groupId: string) => {
  var result = axios.get(`https://localhost:7054/api/Group/GetWeeklyGroupSchedule?date=${currentDate}&groupId=${groupId}`, {
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

export const fetchGroupInfo = (currentDate: string, groupId: string) => {
  var result = axios.get(`https://localhost:7054/api/Group/GroupInfo/${currentDate}&${groupId}`, {
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