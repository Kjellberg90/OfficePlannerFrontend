import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export type User = {
  id: string,
  name: string,
  role: string
}

export interface UserContextInterface {
  user: User,
  setUser: Dispatch<SetStateAction<User>>
}



export const UserContext = createContext<Partial<UserContextInterface>>({})

type UserProvideProps = {
  children : ReactNode
}

export default function UserProvider({children}: UserProvideProps){
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    role: ""
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
} 