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
        console.log(weeks);
    },[weeks])

    useEffect(() => {
        GetSchedules();
    },[])

    const GetWeeksTotal = () => {
        FetchGetTotalWeeks(scheduleId)
        .then((response) => {
            setWeeks(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const GetSchedules = () => {
        FetchGetSchedules()
        .then((response) => {
            setSchedules(response);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const WeekLoop = () => {
        var items = [];
        for (let i = 1; i <= weeks; i++) {
            items.push(<li key={i}><NavLink to="week" onClick={() => setWeek(i)}>Week {i}</NavLink></li>);
        }
        return items;
    }

    const GetSchedule = () => {

    }

    return (
        <Container>
            <Row>
                <Col className="col-2">
                    <Row className="adminBookingNav mb-3">
                        <Nav className="d-flex flex-column">
                            <h5>Schedule</h5>
                            <ul className="">
                                {schedules.map((schedule: Schedule) => {
                                    return (
                                        <li key={schedule.id}><a onClick={() => setScheduleId(schedule.id)}>{schedule.name}</a></li>
                                    )
                                })}
                            </ul>
                        </Nav>
                    </Row>
                    <Row className="adminBookingNav">
                        <Nav className="d-flex flex-column">
                            <h5>{schedules.map((schedule: Schedule) => {
                                if(schedule.id == scheduleId) {
                                    return (schedule.name)
                                }
                            })}</h5>
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