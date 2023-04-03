import axios from "axios"
import instance from "./baseURL"

export const fetchLogin = (data: any) => {

  var result = axios.post(`${instance}api/User/Login`, data, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})

  return result.then((response) => response);
}