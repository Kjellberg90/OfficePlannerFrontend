import { Fragment } from "react";
import WeekTable from "./AdminComponents/WeekTable";
import Week from "./Week";

const Weeks = () => {
    var dateArray = ["2023-01-09", "2023-01-16", "2023-01-23"]

    return (
        <div className="adminBookingWeeks">
            {dateArray.map((date: string, i) => {
                return(
                    <Fragment>
                        <h3>Week {i+1}</h3>
                        <WeekTable inputDate={date} />
                    </Fragment>
                )
            })}
        </div>
    )
}

export default Weeks;