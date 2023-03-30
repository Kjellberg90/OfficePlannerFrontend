import { Fragment } from "react";
import WeekTable from "./AdminComponents/WeekTable";
import Week from "./Week";

const Weeks = () => {
    var dateArray = [1, 2, 3]

    return (
        <div className="adminBookingWeeks">
            {dateArray.map((week: number, i) => {
                return(
                    <Fragment key={i}>
                        <h3>Week {i+1}</h3>
                        <WeekTable weekNumber={week} />
                    </Fragment>
                )
            })}
        </div>
    )
}

export default Weeks;