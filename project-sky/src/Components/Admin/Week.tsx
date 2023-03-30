import { useState } from "react";
import { Container} from "react-bootstrap";
import { useWeek } from "./AdminBooking";
import EditTable from "./AdminComponents/EditTable";
import WeekTable from "./AdminComponents/WeekTable";

const Week = () => {
    const [useEdit, setUseEdit] = useState(false);
    const week: number = useWeek();

    return (
        <Container>
            <div className="d-flex justify-content-between adminBookingActions">
                <h3>Week: {week}</h3>
                <div className="d-flex gap-1">
                    <button className="adminButton" disabled={useEdit} type="button"onClick={() => setUseEdit(true)}>Edit</button>
                    <button className="adminButton" disabled={!useEdit} type="button" onClick={() => setUseEdit(false)}>Cancel</button>
                    <button className="adminButton" disabled={true} type="button">Undo</button>
                    <button className="adminButton" disabled={!useEdit} form="editForm" type="submit" >Save changes</button>
                    <button className="adminButton" disabled={!useEdit} form="editForm" type="reset">Clear Table</button>
                </div>
            </div>
            <div>
                {useEdit ? <EditTable weekNumber={week}/> : <WeekTable weekNumber={week}/>}
            </div>
        </Container>
    )
}

export default Week;