import { Fragment } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import epirocLogo from '../../shared/epiroclogo.svg'
import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { BackButton } from "./LayoutButtons"
import DatePicker from "../../shared/DatePicker"

const Layout = () => {
  const [showBackButton, setShowBackButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" ||
      location.pathname.toString().startsWith("/start") ||
      location.pathname.toString().startsWith("/admin/")) {
      setShowBackButton(false);
    } else {
      setShowBackButton(true);
    }
  })

  return (

    <Fragment>
      <Container className="headerContainer d-flex flex-column align-items-center">
        <Row className="layoutHeader d-flex justify-content-center align-items-center">
          <Col xs={12} md={4} className="layoutColumn">
            <Link to={"/start"}>
              <img src={epirocLogo} alt="test" style={{ width: "100%", height: "100%", objectFit: "contain" }} className="epirocLogo" />
            </Link>
          </Col>
          <Col>
            <DatePicker />
          </Col>
        </Row>
      </Container >
      <Outlet />
      <div>
        {showBackButton ? <BackButton /> : ""}
      </div>
    </Fragment >
  );
}

export default Layout;