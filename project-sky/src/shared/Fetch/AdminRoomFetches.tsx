import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"
import instance from "./baseURL"

export const fetchAdminRooms = async () => {
  try {
    const response = await axios.get(
      `${instance}api/AdminRoom/adminGetRooms`, 
      {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }
  }
);
    return response.data;
} catch (error) {
    console.error("Error Getting Rooms: ", error);
  }
}

export const fetchDeleteRoom = async (data: any) => {
  try {
    const response = await axios.delete(
      `${instance}api/AdminRoom/adminDeleteRooms`, 
      {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer " + GetCookie("token"),
      },
      data: data 
    }
  );
  return response.data;
} catch (error) {
    console.error("Error Deleting Room: ", error);
  }
}

export const fetchPutRoom = async (data: any, roomId: number) => {
  try {
    const response = await axios.put(
      `${instance}api/AdminRoom/adminroomEditRoom?roomId=${roomId}`, data, 
      {
      headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
      }
    }
  );
  return response.data;
} catch (error) {
    console.error("Error Updating Room: ", error);
  }
}

export const fetchPostNewRooom = async (data: any) => {
  try {
    const response = await axios.post(
      `${instance}api/AdminRoom/adminAddRooms`, data, 
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
    console.error("Error Adding Room: ", error);
  }
}

