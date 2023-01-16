import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import epirocLogo from '../shared/epiroclogo.svg'
import { useState, useEffect } from "react"

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
        <div className="layoutHeader">
          <img src={epirocLogo} alt="test" height="80px"/>
          <h1 className="timeDateLayout">{currentDateTime} {time.toLocaleTimeString()}</h1>
        </div>
        <Outlet />
      </Fragment>
  );
}

export default Layout;