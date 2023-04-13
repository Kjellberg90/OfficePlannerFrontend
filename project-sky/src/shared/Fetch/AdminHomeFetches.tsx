import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"
import instance from "./baseURL"

export const fetchGroupsOverviewWeek = async (weekInput: number, scheduleIdInput: number) => {
  try {
    const response = await axios.get(
      `${instance}api/AdminRoom/adminOverviewFromWeek`, 
      {
      params: {
        weekNr: weekInput,
        scheduleId: scheduleIdInput
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + GetCookie("token"),
      }
    }
  );
  return response.data
  } catch(error) {
    console.error("Error Getting Groups Overview (Week): ", error);
  }
}

export const fetchGroupsOverviewDate = async (dateInput: string, scheduleIdInput: number) => {
  try {
    const response = await axios.get(
      `${instance}api/AdminRoom/adminOverviewFromDate`, 
      {
      params: {
      date: dateInput,
      scheduleId: scheduleIdInput
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
      }
    }
  );
  return response.data
  } catch (error) {
    console.error("Error Getting Groups Overview (Date): ", error);
  }
}
