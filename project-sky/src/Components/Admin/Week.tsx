import { useState } from "react";
import { Container} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import EditTable from "./AdminComponents/EditTable";
import WeekTable from "./AdminComponents/WeekTable";

const Week = () => {
    const weekNumber = useLocation().state.weekNumber;
    const [useEdit, setUseEdit] = useState(false);

    const date = useLocation().state.week;

    return (
        <Container>
            <div className="d-flex justify-content-between adminBookingActions">
                <h3>Week: {weekNumber}</h3>
                <div className="d-flex gap-1">
                    <button className="adminButton" disabled={useEdit} type="button"onClick={() => setUseEdit(true)}>Edit</button>
                    <button className="adminButton" disabled={true} type="button">Undo</button>
                    <button className="adminButton" disabled={!useEdit} form="testForm" type="submit" >Save changes</button>
                    <button className="adminButton" disabled={!useEdit} form="testForm" type="reset">Clear Table</button>
                    <button className="adminButton" disabled={!useEdit} type="button" onClick={() => setUseEdit(false)}>Cancel</button>
                </div>
            </div>
            <div>
                {useEdit ? <EditTable currentDate={date}/> : <WeekTable inputDate={date}/>}
            </div>
        </Container>
    )
}

export default Week;