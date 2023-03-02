import React, { useContext } from "react"
import { UserContext } from "../../shared/Context/UserContext";


import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
  //OBS Denna del behöver ses över och funkar inte 100% Korrekt
  if (sessionStorage.getItem("userLoggedIn") === "false") { 
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