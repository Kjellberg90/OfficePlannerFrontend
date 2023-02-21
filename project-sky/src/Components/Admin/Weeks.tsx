import { Fragment } from "react";
import WeekTable from "./AdminComponents/WeekTable";
import Week from "./Week";

const Weeks = () => {
    return (
        <Fragment>
            <h5>Week 1</h5>
            <WeekTable inputDate="2023-01-09" />
            <h5 className="pt-3">Week 2</h5>
            <WeekTable inputDate="2023-01-16" />
            <h5 className="pt-3">Week 3</h5>
            <WeekTable inputDate="2023-01-23" />
        </Fragment>
    )
}

export default Weeks;