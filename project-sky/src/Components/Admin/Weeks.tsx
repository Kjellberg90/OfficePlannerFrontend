import { Fragment } from "react";
import { useOutletContext } from "react-router-dom";
import { useWeek } from "./AdminBooking";
import WeekTable from "./AdminComponents/WeekTable";

const Weeks = () => {
    type ContextType = {
        weekNr: number;
        weekTotal: number;
        scheduleId: number;
    }

    // const week: number = useWeek();
    const weeks: any = useWeek();
    const context: ContextType = useOutletContext();

    const WeekLoop = () => {
        var items = [];
        for (let i = 1; i <= context.weekTotal; i++) {
            items.push(<WeekTable weekNumber={i} scheduleId={context.scheduleId}/>);
        }
        return items;
    }

    return (
        <div className="adminBookingWeeks">
            {WeekLoop().map((week, i) => {
                return(
                    <Fragment key={i}>
                        <h3>Week {i+1}</h3>
                        {week}
                    </Fragment>
                )
            })}
        </div>
    )
}

export default Weeks;