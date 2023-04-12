import axios from "axios"
import { GetCookie } from "../CookieHandler/Cookiehandler"
import instance from "./baseURL"

export const fetchGroups = () => {
  var result = axios.get(`${instance}api/Group/GetGroups`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }
  })
    .then((response) => {
      return response.data
    })
    .catch(err => console.log(err))
  
  return result
}

export const fetchPostNewGroup = (data: any) => {
  var result = axios.post(`${instance}api/AdminGroup/AddGroup`, data, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer " + GetCookie("token"),
    }
  })
  
  return result
}

export const fetchDeleteGroup = (currentGroupId: number) => {
  var result = axios.delete(`${instance}api/AdminGroup/DeleteGroup/${currentGroupId}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer " + GetCookie("token"),
    },
  }
  )
    .catch(err => console.log(err))
  
    return result
}

export const fetchPutGroup = (data: any, groupId: number) => {
  var result = axios.put(`${instance}api/AdminGroup/UpdateGroup/${groupId}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GetCookie("token"),
    }
  })

  return result;
}

