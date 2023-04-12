import { useState } from "react";
import { Container} from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import EditTable from "./AdminComponents/EditTable";
import WeekTable from "./AdminComponents/WeekTable";

const Week = () => {
    type ContextType = {
        weekNr: number;
        weekTotal: number;
        scheduleId: number;
    }
    const [useEdit, setUseEdit] = useState(false);
    const context: ContextType = useOutletContext();

    return (
        <Container>
            <div className="d-flex justify-content-between adminBookingActions">
                <h3>Week: {context.weekNr}</h3>
                <div className="d-flex gap-1">
                    <button className="adminButton" disabled={useEdit} type="button"onClick={() => setUseEdit(true)}>Edit</button>
                    <button className="adminButton" disabled={!useEdit} type="button" onClick={() => setUseEdit(false)}>Cancel</button>
                    <button className="adminButton" disabled={!useEdit} form="editForm" type="submit" >Save changes</button>
                    <button className="adminButton" disabled={!useEdit} form="editForm" type="reset">Clear Table</button>
                </div>
            </div>
            <div>
                {useEdit 
                ? <EditTable weekNumber={context.weekNr} scheduleId={context.scheduleId}/> 
                : <WeekTable weekNumber={context.weekNr} scheduleId={context.scheduleId}/>}
            </div>
        </Container>
    )
}

export default Week;