import { Fragment } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import epirocLogo from '../shared/epiroclogo.svg'
import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons"
import DropdownDatepicker from "../shared/Dropdown-Datepicker"


const Layout = () => {


  

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  const BackButton = () => {
    if(window.location.href !== "http://localhost:3000/") {
      return(
        <Container className="layoutFooter">
          <Row>
            <Col lg={{span: 6, offset: 3}}>
              <FontAwesomeIcon icon={faLongArrowLeft} className="return-arrow" onClick={goBack}/>
            </Col>
          </Row>
        </Container>
      )
    }
  }

  return (
      <Fragment>
          <Container className="headerContainer">
              <Row className="layoutHeader d-flex justify-content-center ">
                <Col className="layoutColumn">
                  <Link to={"/"}>
                    <img src={epirocLogo} alt="test" style={{width:"100%", height: "100%"}} className="epiricLogo"/>
                  </Link>
                </Col> 
                <Col className="layoutColumn datepicker">
                  <DropdownDatepicker />
                </Col>
              </Row>
          </Container>
          <Outlet context={currentDateTime}/>
          {BackButton()}         
      </Fragment>
  );
}

export default Layout;