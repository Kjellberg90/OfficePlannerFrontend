import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import epirocLogo from '../shared/epiroclogo.svg'
import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


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

  return (
      <Fragment>
            <Container className="layoutHeader">
                <Row>
                  <Col className="layoutColumn">
                    <img src={epirocLogo} alt="test" height="80px"/>
                  </Col> 
                  <Col className="layoutColumn">
                    <h1 className="timeDateLayout">{currentDateTime} {time.toLocaleTimeString()}</h1>
                  </Col>
                </Row>
            </Container>
        <Outlet />
      </Fragment>
  );
}

export default Layout;