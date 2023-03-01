import React, { useContext } from "react"
import { UserContext } from "../../shared/Context/UserContext";


import { Navigate, Outlet } from 'react-router-dom'
import { log } from "util";

const useAuth = () => {
  if (sessionStorage.getItem("userLoggedIn") === "true") {
    return true
  } else {
    return false
  }
}

const ProtectedRoutes = () => {
  
  const auth = useAuth();

  return auth?<Outlet />:<Navigate to="/" />
}

export default ProtectedRoutes