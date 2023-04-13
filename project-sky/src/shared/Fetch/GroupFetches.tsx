import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"
import instance from "./baseURL"

export const fetchGroups = async () => {
  try {
    const response = await axios.get(
      `${instance}api/Group/GetGroups`, 
      {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + GetCookie("token"),
      }
    }
  );
  return response.data
  } catch (error) {
    console.error("Error Getting Groups: ", error);
  }
}

export const fetchWeekAndDay = async (currentDate: string) => {
  try {
    const response = await axios.get(
      `${instance}api/Group/GetCurrentWeekAndDay?date=${currentDate}`, 
      {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + GetCookie("token"),
      }
    }
  );
  return response.data
  } catch (error) {
    console.error("Error Getting Current Group Info: ", error);
  }
}

export const fetchWeeklyGroupSchedule = async (currentDate: string, groupId: string) => {
  try {
    const response = await axios.get(
      `${instance}api/Group/GetWeeklyGroupSchedule?date=${currentDate}&groupId=${groupId}`, 
      {
      headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }
  }
);
  return response.data
} catch (error) {
    console.error("Error Getting Group Weekly Schedule: ", error);
  }
}

export const fetchGroupInfo = async (currentDate: string, groupId: string) => {
  try {
    const response = await axios.get(
      `${instance}api/Group/GroupInfo/${currentDate}&${groupId}`, 
      {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + GetCookie("token"),
      }
    }
  );
  return response.data
  } catch (error) {
    console.error("Error Getting Group Info: ", error);
  }
}