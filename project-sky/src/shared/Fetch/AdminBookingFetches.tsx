import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"
import instance from "./baseURL"

export const FetchPutBookings = async (data: any, weekNumber: number) => {
  try {
    const response = await axios.put(
      `${instance}api/Schedule/UpdateBookings/${weekNumber}`, data, 
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + GetCookie("token"),
        }, 
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating bookings: ", error);
  }
};

export const FetchGetSchedules = async () => {
try {
  const response = await axios.get(
    `${instance}api/Schedule/GetSchedules/`,
    {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    },
  }
  );
  return response.data;
  } catch (error) {
    console.error("Error Getting Bookings Schedules: ", error);
  }
};

export const FetchGetTotalWeeks = async (scheduleId: number) => {
  try {
    const response = await axios.get(
      `${instance}api/Schedule/schedule-weeks/${scheduleId}`, 
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + GetCookie("token"),
      }
    } 
    );
    return response.data;
  } catch (error) {
    console.error("Error Getting Total Weeks: ", error);
  }
}

  