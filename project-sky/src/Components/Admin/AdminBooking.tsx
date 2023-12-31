import { useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { FetchGetSchedules, FetchGetTotalWeeks } from "../../shared/Fetch/AdminBookingFetches";

const AdminBooking = () => {
    const [scheduleId, setScheduleId] = useState(1);
    const [schedules, setSchedules] = useState([]);
    const [week, setWeek] = useState(1);
    const [weeks, setWeeks] = useState(0);

    interface Schedule {
        id: number;
        name: string;
        weekIntervall: number;
        startDate: Date | null;
        endDate: Date | null;
        bookings: number | null;
    }

    useEffect(() => {
        GetWeeksTotal();
    },[scheduleId])

    useEffect(() => {
        GetSchedules();
    },[])

    async function GetWeeksTotal() {
        try {
            const response: any = await FetchGetTotalWeeks(scheduleId);
            setWeeks(response);
            } catch(error) {
                console.error(error);
            }
    }

    async function GetSchedules() {
        try {
            const response: any = await FetchGetSchedules();
            setSchedules(response);
        } catch(error) {
            console.error(error);
        }
    }

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
                    <Row className="adminBookingNav">
                        <Nav className="d-flex flex-column">
                            <h5>Schedule</h5>
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