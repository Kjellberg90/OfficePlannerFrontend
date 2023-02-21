import { useContext } from "react";
import { DateContext } from "./DateContext";
import { useState, useEffect } from "react";
import format from "date-fns/format";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretLeft, faSquareCaretRight, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons"
import Col from 'react-bootstrap/Col'


const DatePicker = () => {

    const { formatDate, setFormatDate } = useContext(DateContext)
    const [calDate] = useState<Date>(new Date());
    var [decrementDay] = useState<number>(-1);
    var [incrementDay] = useState<number>(1);
    var [decrementWeek] = useState<number>(-6);
    var [incrementWeek] = useState<number>(6)
    
    const [showToggleBtn, setShowToggleBtn] = useState(false);
    const { toggle, toggleView } = useContext(DateContext)

    useEffect(() => {
        setFormatDate!(formatDate);
    }, [formatDate])

    useEffect(() => {
        if (window.location.href == "http://localhost:3000/" ||
            window.location.href.includes("http://localhost:3000/admin")) {
            setShowToggleBtn(false);
        }
        else if (window.location.href == "http://localhost:3000/info") {
            setShowToggleBtn(true);
        }
    })

    const decrementDate = (e: React.MouseEvent<SVGSVGElement>) => {
        if (!toggle) {
            calDate.setDate(calDate.getDate() + decrementWeek++)
            const formatDate = format(calDate, "yyyy-MM-dd")
            setFormatDate!(formatDate)
        }
        calDate.setDate(calDate.getDate() + decrementDay++)
        const formatDate = format(calDate, "yyyy-MM-dd")
        setFormatDate!(formatDate)
    }

    const incrementDate = (e: React.MouseEvent<SVGSVGElement>) => {
        if (!toggle) {
            const formatDate = format(calDate, "yyyy-MM-dd")
            calDate.setDate(calDate.getDate() + incrementWeek++)
            setFormatDate!(formatDate)
        }
        calDate.setDate(calDate.getDate() + incrementDay++)
        const formatDate = format(calDate, "yyyy-MM-dd")
        setFormatDate!(formatDate)
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        setFormatDate!(value);
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
            <input type="date" className="makeClickable" value={formatDate} onChange={handleChange} style={{ width: "220px", fontSize: "1rem", textAlign: "center", fontWeight: "bold", borderRadius: "10px" }} />
            <FontAwesomeIcon icon={faSquareCaretRight} className="fa-2xl calBtn" onClick={incrementDate} />
        </Col>
    )
}

export default DatePicker;