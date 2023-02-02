import { Fragment } from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Outlet, Link, NavLink } from "react-router-dom";


const AdminLayout = () => {
    return (
        <Fragment>

            <Navbar expand="lg" className="adminNavbar">
                <Container>
                    <Navbar.Brand><NavLink to="home">Office Planer ADMIN</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="home">Home</NavLink>
                            <NavLink to="groups">Groups</NavLink>
                            <NavLink to="rooms">Rooms</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </Fragment>
        );
    
}

export default AdminLayout;