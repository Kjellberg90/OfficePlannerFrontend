import React, { Fragment } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import epirocLogo from '../../shared/epiroclogo.svg'
import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { BackButton } from "./LayoutButtons"
import { useContext } from "react";
import DatePicker from "../../shared/DatePicker"
import { UserContext } from "../../shared/Context/UserContext";

const Layout = () => {
  const [showBackButton, setShowBackButton] = useState(false);

  var { loginStatus } = useContext(UserContext)

console.log("Från layout: ",loginStatus)

  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/" ||
      location.pathname.toString().startsWith("/admin/")) {
      setShowBackButton(false);
    } else {
      setShowBackButton(true);
    }
  })

  return (
    <Fragment>
      <Container className="headerContainer">
        <Row className="layoutHeader d-flex justify-content-center ">
          <Col className="layoutColumn">
            <Link to={"/"}>
              <img onClick={() => window.location.assign("/")} src={epirocLogo} alt="test" style={{ width: "100%", height: "100%" }} className="epirocLogo" />
            </Link>
          </Col>
        <DatePicker />
        </Row>
      </Container >
      <Outlet  />
      <div>
        {showBackButton ? <BackButton /> : ""}
      </div>
    </Fragment >
  );
}

export default Layout;