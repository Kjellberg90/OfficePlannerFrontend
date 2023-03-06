// import { createContext, ReactNode } from "react";
// import { useState } from "react";

// interface IAdminContext {
//     weekNumber: number,
//     setWeekNumber?: (activeWeek: number) => void;

//     week1: Array<{weekDate: string, weekNumber: number}>,
//     week2: Array<{weekDate: string, weekNumber: number}>,
//     week3: Array<{weekDate: string, weekNumber: number}>,
// }

// const defaultState = {
//     weekNumber: 1,
//     week1: Array<{weekDate: "2023-01-09", weekNumber: 1}>,
//     week2: Array<{weekDate: "2023-01-16", weekNumber: 2}>,
//     week3: Array<{weekDate: "2023-01-23", weekNumber: 3}>,
// }

// export const AdminContext = createContext<IAdminContext>(defaultState);

// export const AdminProvider = ({ children }: { children: ReactNode }) => {
//     const [weekNumber, setWeekNumber] = useState(defaultState.weekNumber);
//     const [week1] = useState(defaultState.week1);
//     const [week2] = useState(defaultState.week2);
//     const [week3] = useState(defaultState.week3);

//     const setWeekInfo = () => {
//         setWeekNumber(weekNumber);
//     }

//     return (
//         <AdminContext.Provider
//             value={{
//                 weekNumber,
//                 setWeekNumber,
//                 week1,
//                 week2,
//                 week3,
//             }}>
//             {children}
//         </AdminContext.Provider>
//     )
// }

const AdminContext = () => {
    return (
        null
    )
}

export default AdminContext;