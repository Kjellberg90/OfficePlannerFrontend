import { useContext } from "react";
import { DateContext } from "./DateContext";
import { useState, useEffect } from "react";
import format from "date-fns/format";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretLeft, faSquareCaretRight, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons"
import Col from 'react-bootstrap/Col'

const DatePicker = () => {

    const { currentDate, setcurrentDate } = useContext(DateContext)  

    const [showToggleBtn, setShowToggleBtn] = useState(false);
    const { toggle, toggleView } = useContext(DateContext)

    useEffect(() => {
      setcurrentDate!(currentDate);
    }, [currentDate])

    useEffect(() => {
        if (window.location.href === "http://localhost:3000/" ||
            window.location.href.includes("http://localhost:3000/admin")) {
            setShowToggleBtn(false);
        }
        else if (window.location.href === "http://localhost:3000/info") {
            setShowToggleBtn(true);
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

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        setcurrentDate!(value);
    };

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toggleView!();
    }

    const toggleButton = () => {
        return (
            <button className="togglebtn" onClick={handleOnClick}>
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
            </button>
        )
    }

    return (
        <Col className="layoutColumn datepicker">
            {showToggleBtn ? toggleButton() : ""}
            <FontAwesomeIcon icon={faSquareCaretLeft} className="fa-2xl calBtn" onClick={decrementDate} />
            <input type="date" className="makeClickable" value={currentDate} onChange={handleChange} style={{ width: "220px", fontSize: "1rem", textAlign: "center", fontWeight: "bold", borderRadius: "10px" }} />
            <FontAwesomeIcon icon={faSquareCaretRight} className="fa-2xl calBtn" onClick={incrementDate} />
        </Col>
    )
}

export default DatePicker;