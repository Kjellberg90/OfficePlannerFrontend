import {createContext, ReactNode} from "react";
import {useState, FC} from "react";

interface IDateContext {

    toggle: boolean,
    toggleView?: () => void,
}

const defaultState = {
    toggle: false,
}

export const DateContext = createContext<IDateContext>(defaultState);

export const DateProvider = ({children}: {children: ReactNode})  => {
    const [toggle, setToggle] = useState(defaultState.toggle);
    
    const toggleView = () => {
        setToggle(!toggle)
    };

    return (
        <DateContext.Provider
        value={{
            toggle,
            toggleView,
        }}>
            {children}
        </DateContext.Provider>
    )
}

