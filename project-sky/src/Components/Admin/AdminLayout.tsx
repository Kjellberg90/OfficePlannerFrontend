import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"


const AdminLayout = () => {
    return (
        <Navbar expand="lg" className="adminNavbar">
            <Container>
                <Navbar.Brand href="#home">Office Planer ADMIN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#groups">Groups</Nav.Link>
                        <Nav.Link href="#rooms">Rooms</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
    
}

export default AdminLayout;