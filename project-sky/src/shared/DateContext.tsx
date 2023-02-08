import React, { createContext, useContext, useState,  PropsWithChildren, } from "react";
import { format } from "date-fns";
//Alla barn kan få värdet från denna context
export type DateContext = {
    toggle: boolean
    // date: string,
    // calDate: Date,
    // decrementDay: number,
    // decrementWeek: number,
    // incrementDay: number,
    // incrementWeek: number,
    // formatDate: string,
}

type IProps = PropsWithChildren<{}>

export const DateContext = React.createContext<DateContext>({} as DateContext);

export const useDateContext = () => {
    return useContext(DateContext)
};

export const DateContextProvider: React.FC<IProps> = (props) => {
    const [toggle, setToggle] = useState<boolean>(false)
//     const [date, setDate] = useState(format(new Date, "yyyy-MM-dd"))
//     var [decrementDay] = useState<number>(-1);
//   var [incrementDay] = useState<number>(1);
//   var [decrementWeek] = useState<number>(-6);
//   var [incrementWeek] = useState<number>(6)
//   const [calDate] = useState<Date>(new Date());
//   const [formatDate] = useState(format(calDate, "yyyy-MM-dd"))

    return(
        <DateContext.Provider
        value={{

            toggle,
            // date,
            // calDate,
            // decrementDay,
            // decrementWeek,
            // incrementDay,
            // incrementWeek,
        }}
        >
            {props.children}
        </DateContext.Provider>
    )
}