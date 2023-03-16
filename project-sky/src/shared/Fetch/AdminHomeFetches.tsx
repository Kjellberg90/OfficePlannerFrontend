import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"

export const fetchGroupsOverview = (date: string) => {
  var result = axios.get(`https://localhost:7054/api/Room/adminOverview/` + date, {
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
