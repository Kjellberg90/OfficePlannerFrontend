import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";

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
        axios.get(`https://localhost:7054/api/Schedule/GetSchedules`,{
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