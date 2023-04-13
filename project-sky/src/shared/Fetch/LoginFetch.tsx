import axios from "axios"
import instance from "./baseURL"

export const fetchLogin = async (data: any) => {
  const response = await axios.post(
    `${instance}api/User/Login`, data, 
    {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    }
  );
    return response;
}