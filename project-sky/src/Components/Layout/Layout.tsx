import React, { Fragment } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import epirocLogo from '../../shared/epiroclogo.svg'
import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faSquareCaretLeft, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons"
import { format } from "date-fns";

const Layout = () => {
  
  const [date, setDate] = useState(format(new Date, "yyyy-MM-dd"));
  const [showBackButton, setShowBackButton] = useState(false);
  const [calDate ] = useState<Date>(new Date());
  var [decrement ] = useState<number>(-1);
  var [increment] = useState<number>(1);
  const [formatDate] = useState(format(calDate, "yyyy-MM-dd"))

  const [dateValue, setDateValue] = useState<string>(date)

  useEffect(() => {
    setDate(formatDate);
  }, [formatDate])
  
  //Type dis
  const decrementDate = (e: any) => {
    calDate.setDate(calDate.getDate() + decrement++)
    const formatDate = format(calDate, "yyyy-MM-dd")
    setDate(formatDate)
  }

  const incrementDate = (e: any) => {
    calDate.setDate(calDate.getDate() + increment++)
    const formatDate = format(calDate, "yyyy-MM-dd")
    setDate(formatDate)
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setDate(value);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  useEffect (() => {
    if( window.location.href == "http://localhost:3000/" || 
      window.location.href == "http://localhost:3000/admin#home" || 
      window.location.href == "http://localhost:3000/admin#groups" || 
      window.location.href == "http://localhost:3000/admin#rooms") {
      setShowBackButton(false);
    }
    else {
      setShowBackButton(true)
    }
  })


  const BackButton = () => {
    return(
      <Container className="layoutFooter">
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={6}>
            <FontAwesomeIcon icon={faLongArrowLeft} className="return-arrow" onClick={goBack}/>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
      <Fragment>
          <Container className="headerContainer">
              <Row className="layoutHeader d-flex justify-content-center ">
                <Col className="layoutColumn">
                  <Link to={"/"}>
                    <img onClick={() => window.location.assign("/")} src={epirocLogo} alt="test" style={{width:"100%", height: "100%"}} className="epirocLogo"/>
                  </Link>
                </Col> 
                <Col className="layoutColumn datepicker">
                <FontAwesomeIcon icon={faSquareCaretLeft} className="fa-2xl calBtn" onClick={decrementDate} />
                <input type="date" className="makeClickable" defaultValue={date} value={date} onChange={handleChange} style={{width:"220px", fontSize:"1rem", textAlign:"center", fontWeight:"bold", borderRadius:"10px"}}/>
                <FontAwesomeIcon icon={faSquareCaretRight} className="fa-2xl calBtn" onClick={incrementDate} />
                </Col>
              </Row>
          </Container>
          <Outlet context={date}/>
          <div>
            {showBackButton ? BackButton() : ""}         
          </div>
      </Fragment>
  );
}

export default Layout;