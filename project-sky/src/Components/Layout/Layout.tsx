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
              {/* <img src={epirocLogo} alt="Epiroc Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} className="epirocLogo" /> */}
              <svg width="100%" height="100%" viewBox="0 0 417 125" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#FFC72C" className="epirocLogo">
                <path d="M244.707,14.716c5.161,-0.086 9.463,4.13 9.549,9.291c0.086,5.162 -4.13,9.463 -9.291,9.549c-5.162,0.086 -9.463,-4.129 -9.549,-9.291l-0,-0.086c-0,-5.161 4.129,-9.377 9.291,-9.463Zm128.953,51.788c-0,8.345 5.592,12.99 12.302,12.99c4.559,0.172 8.688,-2.409 10.409,-6.624c0.258,-0.688 1.032,-1.032 1.72,-0.86l11.528,3.527c0.774,0.258 1.204,1.032 0.946,1.806l0,0.086c-2.753,8.689 -11.269,16.862 -24.603,16.862c-15.657,-0 -28.217,-11.528 -28.217,-27.787c0,-16.259 12.216,-27.872 27.7,-27.872c13.765,-0 22.109,8 24.862,16.861c0.258,0.774 -0.086,1.548 -0.86,1.806l-0.086,0l-11.7,3.527c-0.688,0.172 -1.462,-0.172 -1.72,-0.86c-1.463,-3.527 -4.56,-6.624 -10.151,-6.624c-6.71,0.086 -12.13,4.732 -12.13,13.162Zm-48.433,-27.872c-15.657,-0 -27.872,11.527 -27.872,27.786c-0,16.259 12.215,27.873 27.872,27.873c15.657,-0 27.873,-11.614 27.873,-27.873c-0,-16.259 -12.13,-27.786 -27.873,-27.786Zm0,40.862c-6.022,0 -11.785,-4.301 -11.785,-13.076c-0,-8.775 5.849,-12.99 11.785,-12.99c6.022,0 11.872,4.129 11.872,12.99c-0,8.861 -5.678,13.076 -11.872,13.076Zm-30.195,-25.034c-0.086,0.775 -0.86,1.291 -1.635,1.205c-1.032,-0.172 -2.064,-0.172 -3.01,-0.172c-6.452,-0 -12.216,3.871 -12.216,14.28l-0,21.507c-0,0.774 -0.602,1.462 -1.463,1.462l-13.248,0c-0.774,0 -1.462,-0.602 -1.462,-1.462l-0,-49.637c-0,-0.775 0.602,-1.463 1.462,-1.463l12.732,0c0.774,0 1.463,0.602 1.463,1.463l-0,5.677c2.753,-5.935 9.377,-7.656 13.592,-7.656c1.548,-0 3.097,0.172 4.645,0.516c0.774,0.172 1.205,0.86 1.119,1.635l-1.979,12.645Zm-56.863,-14.28l13.248,0c0.774,0 1.462,0.602 1.462,1.463l0,49.637c0,0.774 -0.602,1.462 -1.462,1.462l-13.248,0c-0.775,0 -1.463,-0.602 -1.463,-1.462l0,-49.637c0,-0.775 0.688,-1.463 1.463,-1.463Zm-32.002,-1.204c-7.484,-0 -13.248,3.269 -15.399,6.624l0,-3.957c0,-0.775 -0.602,-1.463 -1.462,-1.463l-12.646,0c-0.774,0 -1.376,0.602 -1.462,1.377l-0,69.681c-0,0.774 0.602,1.462 1.462,1.462l13.248,0c0.774,0 1.376,-0.602 1.376,-1.376l0,-22.797c2.409,2.925 7.485,5.247 14.281,5.247c14.71,0 25.033,-11.527 25.033,-27.614c0,-15.571 -9.204,-27.184 -24.431,-27.184Zm-3.269,40.518c-6.28,0 -11.872,-4.473 -11.872,-13.076c0,-8.602 5.592,-12.99 11.872,-12.99c6.28,0 11.958,4.215 11.958,12.99c-0,8.775 -5.592,13.076 -11.958,13.076Zm-82.155,11.786l-0,-72.09c-0,-0.774 0.602,-1.377 1.462,-1.463l44.648,0c0.774,0 1.376,0.603 1.462,1.463l0,12.904c0,0.774 -0.602,1.376 -1.462,1.462l-27.958,0c-0.775,0 -1.463,0.602 -1.463,1.463l0,11.441c0,0.774 0.602,1.463 1.463,1.463l25.033,-0c0.774,-0 1.377,0.688 1.377,1.462l-0,11.786c-0,0.774 -0.603,1.462 -1.463,1.462l-25.034,-0c-0.774,-0 -1.376,0.602 -1.462,1.462l0,11.528c0,0.774 0.602,1.462 1.462,1.462l28.045,0c0.774,0 1.462,0.603 1.462,1.463l0,12.99c0,0.774 -0.602,1.376 -1.376,1.462l-44.734,0c-0.86,-0.258 -1.462,-0.86 -1.462,-1.72Zm-25.034,-45.68l0,-13.076c0,-2.667 -1.462,-5.162 -3.785,-6.538l-36.733,-21.249c-2.323,-1.376 -5.248,-1.376 -7.57,0l-36.733,21.249c-2.323,1.376 -3.786,3.871 -3.872,6.538l0,42.411c0,2.667 1.463,5.161 3.786,6.538l36.733,21.248c2.322,1.377 5.247,1.377 7.57,0l36.819,-21.162c2.323,-1.377 3.785,-3.785 3.785,-6.538l0,-19.27l-44.303,26.496l-24.604,-14.194l0,-28.475l22.109,-12.732c1.549,-0.86 3.441,-0.86 5.076,0l22.108,12.904l-22.797,13.162c-1.634,0.946 -3.613,0.946 -5.247,0l-16.345,-9.463l-0,22.109l19.356,10.323l40.862,-23.571c2.323,-1.463 3.785,-3.957 3.785,-6.71Z" 
                      />
              </svg>
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