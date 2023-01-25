import { Fragment } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import epirocLogo from '../shared/epiroclogo.svg'
import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { format } from "date-fns";


const Layout = () => {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  const [date, setDate] = useState("");

  var today = new Date();
  var formattedDate = format(today, "yyyy-MM-dd");
  useEffect(() => {
      setDate(formattedDate);
  }, [formattedDate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setDate(value);
  };

  const resetDate = () => {
    const currentDate = new Date();
    const currentDatetoString =  currentDate.toLocaleDateString();
    setDate(currentDatetoString)
  }

  const BackButton = () => {
    if(window.location.href !== "http://localhost:3000/") {
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
                <input type="date" defaultValue={formattedDate} onChange={handleChange} style={{width:"220px", fontSize:"1rem", textAlign:"center", fontWeight:"bold", borderRadius:"10px"}}/>
                </Col>
              </Row>
          </Container>
          <Outlet context={date}/>
          {BackButton()}         
      </Fragment>
  );
}

export default Layout;