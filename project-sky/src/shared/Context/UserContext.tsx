import { createContext, ReactNode, useContext, useState } from "react";


interface IUserContext {
  loginStatus: boolean,
  setloginStatus?: (loginStatus: boolean) => void
}

const defaultState = {
  loginStatus: false,
}

export const UserContext = createContext<IUserContext>(defaultState)

const UserProvider = ({children}: {children: ReactNode}) => {
  const [loginStatus, setloginStatus] = useState(defaultState.loginStatus)

  return (
    <UserContext.Provider 
      value={{
          loginStatus, 
          setloginStatus
        }}>
          {children}
    </UserContext.Provider>
  )
}

export default UserProvider


