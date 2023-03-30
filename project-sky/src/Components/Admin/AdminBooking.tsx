import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";

const AdminBooking = () => {
    const [scheduleId, setScheduleId] = useState(1);
    const [weeks, setWeeks] = useState(0);
    const [week, setWeek] = useState(1);

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

    const HandleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        var value = e.target.value;
        var valueAsNumber = parseInt(value); 

        setScheduleId(valueAsNumber);
    }

    return (
        <Container>
            <Row>
                <Col className="col-2 adminBookingNav">
                    <Nav className="d-flex flex-column">
                        <div>
                            <h5>Schedule</h5>
                                <form>
                                    <select onChange={(e: ChangeEvent<HTMLSelectElement>) => {HandleChange(e)}}>
                                        <option value={1}>Default</option>
                                        <option value={2}>Sommarschema</option> 
                                    </select>
                                </form>
                            <h5>Weeks</h5>
                            <ul>
                                <li><NavLink to="weeks">All weeks</NavLink></li>
                                <li><NavLink to="week" onClick={() => setWeek(1)}>Week 1</NavLink></li>
                                <li><NavLink to="week" onClick={() => setWeek(2)}>Week 2</NavLink></li>
                                <li><NavLink to="week" onClick={() => setWeek(3)}>Week 3</NavLink></li>
                            </ul>
                        </div>
                    </Nav>
                </Col>
                <Col>
                    <Outlet context={week}/>
                </Col>                
            </Row>
        </Container>
    )
}

export const useWeek = () => {
    return useOutletContext<number>();
}

export default AdminBooking;