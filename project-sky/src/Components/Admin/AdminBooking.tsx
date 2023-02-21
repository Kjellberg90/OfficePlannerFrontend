import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const AdminBooking = () => {

    return (
        <Container>
            <Row>
                <Col className="col-2 adminBookingNav">
                    <Nav className="d-flex flex-column">
                        <div>
                            <h5>Overview</h5>
                        </div>
                        <div>
                            <h5>Weeks</h5>
                            <ul>
                                <li><NavLink to="weeks">All weeks</NavLink></li>
                                <li><NavLink to="week" state={{week: "2023-01-09", weekNumber: 1}}>Week 1</NavLink></li>
                                <li><NavLink to="week" state={{week: "2023-01-16", weekNumber: 2}}>Week 2</NavLink></li>
                                <li><NavLink to="week" state={{week: "2023-01-23", weekNumber: 3}}>Week 3</NavLink></li>
                                <li>Edit</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Recurring</h5>                            
                        </div>
                    </Nav>
                </Col>
                <Col>
                    <Outlet />
                </Col>                
            </Row>
        </Container>
    )
}

export default AdminBooking;