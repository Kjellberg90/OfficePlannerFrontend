import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"

export const fetchGroupsOverviewWeek = (weekInput: number, scheduleIdInput: number) => {
  var result = axios.get(`https://localhost:7054/api/AdminRoom/adminOverviewFromWeek`, {
    params: {
      weekNr: weekInput,
      scheduleId: scheduleIdInput
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }
  })
    .then((response) => {
      return response.data
    })
    .catch(err => console.log(err))
  
  return result
}

export const fetchGroupsOverviewDate = (dateInput: string, scheduleIdInput: number) => {
  var result = axios.get(`https://localhost:7054/api/AdminRoom/adminOverviewFromDate`, {
    params: {
      date: dateInput,
      scheduleId: scheduleIdInput
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }
  })
    .then((response) => {
      return response.data
    })
    .catch(err => console.log(err))
  
  return result
}
