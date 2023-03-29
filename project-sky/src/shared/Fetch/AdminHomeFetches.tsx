import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"

export const fetchGroupsOverviewWeek = (week: number) => {
  var result = axios.get(`https://localhost:7054/api/Room/adminOverviewFromWeek/` + week, {
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

export const fetchGroupsOverviewDate = (date: string) => {
  var result = axios.get(`https://localhost:7054/api/Room/adminOverviewFromDate/` + date, {
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
