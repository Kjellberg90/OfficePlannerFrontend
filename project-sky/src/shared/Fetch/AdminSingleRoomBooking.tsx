import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"
import instance from "./baseURL"

export const fetchAdminSingleRoomBooking = async () => {
  try {
    const response = await axios.get(
      `${instance}api/AdminRoomBooking/getGroupsBookedToRoom`, 
      {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer " + GetCookie("token"),
       }
      }
    );
    return response.data
  } catch (error) {
    console.error("Error Getting Single Bookings: ", error);
  }
}

export const fetchDeleteBooking = async (ID : any) => {
  try {
    const response = await axios.delete(
      `${instance}api/AdminRoomBooking/deleteGroupToRoomBooking?Id=${ID}`, 
      {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer " + GetCookie("token"),
        }
      }
    );
    return response;
  } catch (error) {
    console.error("Error Deleting Single Booking: ", error);
  }
}

export const fetchDeleteOldBookings = async () => {
try {
  const response = await axios.delete(
    `${instance}api/AdminRoomBooking/deleteOldSingleRoomBookings`, 
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
    console.error("Error Deleting Single Bookings: ", error);
  }
}

export const fetchPostNewBooking = async (data: any) => {
  try {
    const response = await axios.post(
      `${instance}api/AdminRoomBooking/postGroupToRoom`, data, 
      {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer " + GetCookie("token"),
      }
    }
  );
  return response;
} catch (error) {
    console.error("Error Adding a Single Booking: ", error);
  }
}

export const fetchPutBooking = async (id: any , data: any) => {
  try {
    const response = await axios.put(
      `${instance}api/AdminRoomBooking/EditGroupToRoomBooking?Id=${id}`, data, 
      {
      headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
      }
    }
  );
  return response.data;
} catch (error) {
    console.error("Error Updating Single Booking: ", error);
  }
}