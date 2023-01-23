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
    if(window.location.href != "http://localhost:3000/") {
      return(<FontAwesomeIcon icon={faLongArrowLeft} className="return-arrow" onClick={goBack}/>)
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