import {createContext, ReactNode} from "react";
import {useState} from "react";
import { format } from "date-fns";

interface IDateContext {

    toggle: boolean,
    toggleView?: () => void,
    currentDate: string,
    setcurrentDate?: (activeDate: string) => void,
}

const defaultState = {
    toggle: true,
    currentDate: "yyyy-MM-dd",
}

export const DateContext = createContext<IDateContext>(defaultState);

export const DateProvider = ({children}: {children: ReactNode})  => {
    const [toggle, setToggle] = useState(defaultState.toggle);
    const [currentDate, setcurrentDate] = useState(format(new Date, "yyyy-MM-dd"))

    const toggleView = () => {
        setToggle(!toggle)
    };

    return (
        <DateContext.Provider
        value={{
            currentDate,
            setcurrentDate,
            toggle,
            toggleView,
        }}>
            {children}
        </DateContext.Provider>
    )
}

