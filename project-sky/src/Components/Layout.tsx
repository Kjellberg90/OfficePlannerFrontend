import { Fragment } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import epirocLogo from '../shared/epiroclogo.svg'
import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons"


const Layout = () => {

  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();

  var currentDateTime = `${year}-${month}-${day}`

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
          <Container className="layoutHeader">
              <Row>
                <Col className="layoutColumn">
                  <Link to={"/"}>
                    <img src={epirocLogo} alt="test" height="80px"/>
                  </Link>
                </Col> 
                <Col className="layoutColumn">
                  <h1 className="timeDateLayout">{currentDateTime} {time.toLocaleTimeString('sv-SE')}</h1>
                </Col>
              </Row>
          </Container>
          <Outlet />
          {BackButton()}         
      </Fragment>
  );
}

export default Layout;