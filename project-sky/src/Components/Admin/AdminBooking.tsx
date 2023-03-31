import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import { Link, NavLink, Outlet, useOutletContext } from "react-router-dom";

const AdminBooking = () => {
    const [scheduleId, setScheduleId] = useState(1);
    const [schedules, setSchedules] = useState([]);
    const [week, setWeek] = useState(1);
    const [weeks, setWeeks] = useState(0);

    type ContextType = {
        weekNr: number | null;
        weekTotal: number | null;
    }

    useEffect(() => {
        GetWeeksTotal();
    },[scheduleId])

    useEffect(() => {
        console.log(weeks);
    },[weeks])

    const GetWeeksTotal = () => {
        axios.get(`https://localhost:7054/api/Schedule/schedule-weeks/${scheduleId}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            setWeeks(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const GetSchedules = () => {
        axios.get(`https://localhost:7054/api/Schedule/GetSchedules/${scheduleId}`,{
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            setSchedules(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    // const HandleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //     var value = e.target.value;
    //     var valueAsNumber = parseInt(value); 

    //     setScheduleId(valueAsNumber);
    // }

    const WeekLoop = () => {
        var items = [];
        for (let i = 1; i <= weeks; i++) {
            items.push(<li key={i}><NavLink to="week" onClick={() => setWeek(i)}>Week {i}</NavLink></li>);
        }
        return items;
    }

    return (
        <Container>
            <Row>
                <Col className="col-2">
                    <Row className="adminBookingNav mb-3">
                        <Nav className="d-flex flex-column">
                            <h5>Schedule</h5>
                            {/* <form>
                                <select onChange={(e: ChangeEvent<HTMLSelectElement>) => {HandleChange(e)}}>
                                    <option value={1}>Default</option>
                                    <option value={2}>Sommarschema</option> 
                                </select>
                            </form> */}

                            
                        </Nav>
                    </Row>
                    <Row className="adminBookingNav">
                        <Nav className="d-flex flex-column">
                            <h5>Weeks</h5>
                            <ul>
                                <li><NavLink to="weeks">All weeks</NavLink></li>
                                {WeekLoop().map((item) => {
                                    return (item);
                                })}
                            </ul>
                        </Nav>
                    </Row>
                    
                </Col>
                <Col>
                    <Outlet context={{weekNr: week, weekTotal: weeks, scheduleId: scheduleId}}/>
                </Col>                
            </Row>
        </Container>
    )
}

export const useWeek = () => {
    return useOutletContext<number>();
}

export default AdminBooking;