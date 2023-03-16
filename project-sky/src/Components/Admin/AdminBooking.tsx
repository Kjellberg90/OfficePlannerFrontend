import { useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { weekData } from "./AdminInterfaces";

const AdminBooking = () => {
    const [week, setWeek] = useState<weekData>({
        weekNumber: 1,
        date: "2023-01-09"
    });

    return (
        <Container>
            <Row>
                <Col className="col-2 adminBookingNav">
                    <Nav className="d-flex flex-column">
                        <div>
                            <h5>Weeks</h5>
                            <ul>
                                <li><NavLink to="weeks">All weeks</NavLink></li>
                                <li><NavLink to="week" onClick={() => setWeek({weekNumber: 1, date: "2023-01-09"})}>Week 1</NavLink></li>
                                <li><NavLink to="week" onClick={() => setWeek({weekNumber: 2, date: "2023-01-16"})}>Week 2</NavLink></li>
                                <li><NavLink to="week" onClick={() => setWeek({weekNumber: 3, date: "2023-01-23"})}>Week 3</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <h5>Recurring</h5>                            
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
    return useOutletContext<weekData>();
}

export default AdminBooking;