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

export const fetchPostNewGroup = async (data: any) => {
  try {
    const response = await axios.post(
      `${instance}api/AdminGroup/AddGroup`, data, 
      {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer " + GetCookie("token"),
      }
    }
  );
    return response.data;
  } catch (error) {
    console.error("Error Adding Group: ", error);
  }
}

export const fetchDeleteGroup = async (currentGroupId: number) => {
  try {
    const response = axios.delete(
      `${instance}api/AdminGroup/DeleteGroup/${currentGroupId}`, 
      {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer " + GetCookie("token"),
      }
    }
  );
  return response;
  } catch(error) {
    console.error("Error Deleting Group: ", error);
  }
}

export const fetchPutGroup = async (data: any, groupId: number) => {
  try {
    const response = await axios.put(
      `${instance}api/AdminGroup/UpdateGroup/${groupId}`, data, 
      {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + GetCookie("token"),
      }
    }
  );
  return response.data;
} catch (error) {
  console.error("Error Updating Group: ", error);
  }
}

