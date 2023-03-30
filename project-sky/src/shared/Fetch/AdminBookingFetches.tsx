import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"

export const FetchPutBookings = (data: any, weekNumber: number) => {
    var result = axios.put(`https://localhost:7054/api/Booking/UpdateBookings/${weekNumber}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + GetCookie("token"),
      }
    })
    .catch(err => console.log(err))
  
    return result
}

  