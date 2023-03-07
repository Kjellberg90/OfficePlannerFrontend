import { useContext } from "react";
import { DateContext } from "./DateContext";
import { useState, useEffect } from "react";
import format from "date-fns/format";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretLeft, faSquareCaretRight, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons"
import { Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = () => {

    const { currentDate, setcurrentDate } = useContext(DateContext)  

    const [showToggleBtn, setShowToggleBtn] = useState(false);
    const { toggle, toggleView } = useContext(DateContext)
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
      setcurrentDate!(currentDate);
    }, [currentDate])

    useEffect(() => {
        if (window.location.href === "http://localhost:3000/info") {
            setShowToggleBtn(true);
          }
          else {
          setShowToggleBtn(false);
        }       
      })

    const decrementDate = (e: React.MouseEvent<SVGSVGElement>) => {
      var calDate: Date = new Date()
        if (!toggle) {
          calDate = new Date(Date.parse(currentDate) - 86400000 * 7 )
          const formatDate = format(calDate, "yyyy-MM-dd")
          setcurrentDate!(formatDate)
        }
        else {
          calDate = new Date(Date.parse(currentDate) - 86400000 )
          const formatDate = format(calDate, "yyyy-MM-dd")
          setcurrentDate!(formatDate)
        }
    }

    const incrementDate = (e: React.MouseEvent<SVGSVGElement>) => {
        var calDate: Date = new Date()
        if (!toggle) {
          calDate = new Date(Date.parse(currentDate) + 86400000 * 7 )
          const formatDate = format(calDate, "yyyy-MM-dd")
          setcurrentDate!(formatDate)
        }
        else {
          calDate = new Date(Date.parse(currentDate) + 86400000 )
          const formatDate = format(calDate, "yyyy-MM-dd")
          setcurrentDate!(formatDate)
        }
    }

    function handleChange(e: any) {
      var time = new Date(e).toLocaleDateString("sv-SE")
        setcurrentDate!(time);
    };

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toggleView!();
    }

    const toggleButton = () => {
        return (
              
            <button className="togglebtn" onClick={handleOnClick}>
                {toggle ?
                <>
                        <FontAwesomeIcon icon={faToggleOff} />
                        <label className="givemespace toggle-off">Day</label>
                </>
                     :
                     <>
                        <FontAwesomeIcon icon={faToggleOn} />
                        <label className="givemespace2 toggle-on">Week</label>
                    </>
                      }
            </button>
            
        )
    }

    return (
      <Row className="flex-wrap">
           
        <Col className="justify-content-center align-self-center d-flex order-md-2" xs={12} md={7}>
            <FontAwesomeIcon icon={faSquareCaretLeft} className="fa-2xl calBtn" onClick={decrementDate} />
            <DatePicker 
              value={currentDate}
              selected={startDate} 
              onChange={(date) => handleChange(date)}
              showWeekNumbers
              todayButton="Go To Today"
              className="dateInput"
              calendarClassName="calendarInput"
            />
            <FontAwesomeIcon icon={faSquareCaretRight} className="fa-2xl calBtn" onClick={incrementDate} />
        </Col>
        <Col xs={12} md={3} className="d-flex align-items-center mr-md-2">
        {showToggleBtn ? toggleButton() : ""}
        </Col>
      </Row>
    )
}

export default Datepicker;