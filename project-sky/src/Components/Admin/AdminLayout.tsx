import { Fragment } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Outlet, NavLink } from "react-router-dom";


const AdminLayout = () => {
    return (
        <Fragment>

            <Navbar expand="lg" className="adminNavbar">
                <Container>
                    <Navbar.Brand><NavLink to="home" className="linkItem">Office Planner ADMIN</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="home" className="linkItem">Home</NavLink>
                            <NavLink to="groups" className="linkItem">Groups</NavLink>
                            <NavLink to="rooms" className="linkItem">Rooms</NavLink>
                            <NavLink to="booking/weeks" className="linkItem">Booking</NavLink>
                            <NavLink to="singlebooking" className="linkItem">Single Booking</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </Fragment>
        );
    
}

export default AdminLayout;