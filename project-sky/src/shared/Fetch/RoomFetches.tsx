import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"
import instance from "./baseURL"

export const fetchRooms = async (currentDate: string) => {
  try {
    const response = await axios.get(
      `${instance}api/Room/get-rooms-info?date=${currentDate}`, 
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

export const fetchSingleBookings = async (currentDate: string, roomId: number) => {
  try {
    const response = await axios.get(
      `${instance}api/SingleBooking/GetSingleBookings?date=${currentDate}&roomId=${roomId}`, 
      {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + GetCookie("token"),
        }
      }
    );
    return response.data
    } catch(error) {
      console.error("Error Getting Single Bookings: ", error);
    }
}

export const fetchDeleteSingleBookings = async (data: any) => {
  const userData = data
  try {
    const response = await axios.delete(
      `${instance}api/SingleBooking/DeleteSingleBooking`, 
      {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer " + GetCookie("token"),
       },
      data: userData
      }
    );
    return response;
  } catch (error) {
    console.error("Error Deleting Single Booking: ", error);
  }
}

export const fetchPostSingleBookings = async (data: any) => {
  const userData = data
  try {
    const response = await axios.post(
      `${instance}api/SingleBooking/SingleBooking`, userData, 
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
  console.error("Error Adding Single Booking: ", error);
  }
}