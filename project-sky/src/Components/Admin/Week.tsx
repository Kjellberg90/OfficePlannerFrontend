import { useState } from "react";
import { Container} from "react-bootstrap";
import { useWeek } from "./AdminBooking";
import EditTable from "./AdminComponents/EditTable";
import WeekTable from "./AdminComponents/WeekTable";
import { weekData } from "./AdminInterfaces";

const Week = () => {
    const [useEdit, setUseEdit] = useState(false);
    const week: weekData = useWeek();

    return (
        <Container>
            <div className="d-flex justify-content-between adminBookingActions">
                <h3>Week: {week.weekNumber}</h3>
                <div className="d-flex gap-1">
                    <button className="adminButton" disabled={useEdit} type="button"onClick={() => setUseEdit(true)}>Edit</button>
                    <button className="adminButton" disabled={!useEdit} type="button" onClick={() => setUseEdit(false)}>Cancel</button>
                    <button className="adminButton" disabled={true} type="button">Undo</button>
                    <button className="adminButton" disabled={!useEdit} form="editForm" type="submit" >Save changes</button>
                    <button className="adminButton" disabled={!useEdit} form="editForm" type="reset">Clear Table</button>
                </div>
            </div>
            <div>
                {useEdit ? <EditTable currentDate={week.date}/> : <WeekTable inputDate={week.date}/>}
            </div>
        </Container>
    )
}

export default Week;