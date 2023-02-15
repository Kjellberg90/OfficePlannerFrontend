import React, { Fragment } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import epirocLogo from '../../shared/epiroclogo.svg'
import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faSquareCaretLeft, faSquareCaretRight, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons"
import { format } from "date-fns";

const Layout = () => {

  const [date, setDate] = useState(format(new Date, "yyyy-MM-dd"));
  const [showBackButton, setShowBackButton] = useState(false);
  const [showToggleBtn, setShowToggleBtn] = useState(false);
  const [calDate] = useState<Date>(new Date());
  var [decrementDay] = useState<number>(-1);
  var [incrementDay] = useState<number>(1);
  var[decrementWeek] = useState<number>(-6);
  var[incrementWeek] = useState<number>(6)
  const [formatDate] = useState(format(calDate, "yyyy-MM-dd"))
  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    setDate(formatDate);
  }, [formatDate])

  const decrementDate = (event: React.MouseEvent<SVGSVGElement>) => {
    if(!toggle){
      calDate.setDate(calDate.getDate() + decrementWeek++)
      const formatDate = format(calDate, "yyyy-MM-dd")
      setDate(formatDate)
    }
      calDate.setDate(calDate.getDate() + decrementDay++)
      const formatDate = format(calDate, "yyyy-MM-dd")
      setDate(formatDate)
  }

  const incrementDate = (event: React.MouseEvent<SVGSVGElement>) => {
    if(!toggle){
      const formatDate = format(calDate, "yyyy-MM-dd")
      calDate.setDate(calDate.getDate() + incrementWeek++)
    setDate(formatDate)
    }
    calDate.setDate(calDate.getDate() + incrementDay++)
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

  useEffect(() => {
    if (window.location.href == "http://localhost:3000/" ||
      window.location.href == "http://localhost:3000/admin/home" ||
      window.location.href == "http://localhost:3000/admin/groups" ||
      window.location.href == "http://localhost:3000/admin/rooms") {
      setShowBackButton(false);
    }
    else {
      setShowBackButton(true);
    }
  })

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/info") {
      setShowToggleBtn(true);
    }
    else {
      setShowToggleBtn(false);
    }
  })


  const BackButton = () => {
    return (
      <Container className="layoutFooter">
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={6}>
            <FontAwesomeIcon icon={faLongArrowLeft} className="return-arrow" onClick={goBack} />
          </Col>
        </Row>
      </Container>
    )
  }

  const ToggleButton = () => {
    return (
      <button className="togglebtn " onClick={() => setToggle(!toggle)} type="button">
      <>
        {toggle ?
          <Col>
            <FontAwesomeIcon icon={faToggleOff} />
            <label className="givemespace toggle-off">Day</label>
          </Col> :
          <Col>
            <FontAwesomeIcon icon={faToggleOn} />
            <label className="givemespace2 toggle-on">Week</label>
          </Col>
        }
      </>
    </button>
    )
  }

  return (
    <Fragment>
      <Container className="headerContainer">
        <Row className="layoutHeader d-flex justify-content-center ">
          <Col className="layoutColumn">
            <Link to={"/"}>
              <img onClick={() => window.location.assign("/")} src={epirocLogo} alt="test" style={{ width: "100%", height: "100%" }} className="epirocLogo" />
            </Link>
          </Col>
          <Col className="layoutColumn datepicker">
            {showToggleBtn ? ToggleButton() : ""}
            <FontAwesomeIcon icon={faSquareCaretLeft} className="fa-2xl calBtn" onClick={decrementDate} />
            <input type="date" className="makeClickable" value={date} onChange={handleChange} style={{ width: "220px", fontSize: "1rem", textAlign: "center", fontWeight: "bold", borderRadius: "10px" }} />
            <FontAwesomeIcon icon={faSquareCaretRight} className="fa-2xl calBtn" onClick={incrementDate} />
          </Col>
        </Row>
      </Container>
      <Outlet context={date} />
      <div>
        {showBackButton ? BackButton() : ""}
      </div>
    </Fragment>
  );
}

export default Layout;