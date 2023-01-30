import { loadRoomData } from "../shared/fetch/testdata";
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom';

const {
    jsonRoomData
} = loadRoomData();

function CheckIfBookingExist() {

  const currentDate = useOutletContext(); //Använda detta datum till fetch när bakend fungerar

    const location = useLocation();
    var groupName: string = location.state.group.name

    const [check, setCheck] = useState<boolean>()
    let response = false;

    useEffect(() => {
        setCheck(response);
    }, [response])

    jsonRoomData.map(info  => {
        if (info.bookedBy === groupName) {
            response = true;
        }
        return response;
    })

    if (check === true) {
        return <GroupDetails />
    }

    return (
        <Row className="d-flex align-items-center justify-content-center text-center" style={{height:"80vh", overflow:"hidden"}}>
            <Col>
                <h1>No bookings could be found</h1>
            </Col>
        </Row>
    )
}

function GroupDetails() {

    const location = useLocation();

    var groupName: string = location.state.group.name

    return (
        <Row className="d-flex align-items-center justify-content-center" style={{height:"80vh", overflow:"hidden"}}>

            {
                jsonRoomData.map((info: any) => info.bookedBy === groupName && (
                    <Col className="groupInfoCard" key={groupName} md={6} lg="auto" xl="auto">
                        <h2>Room: {info.roomName}</h2>
                        <h2>Number of seatings: {info.seating}</h2>
                        <h2>Booked By Team: {info.bookedBy}</h2>
                        <h2>Time: {info.startTime} - {info.endTime}</h2>
                    </Col>
                )
                )}
        </Row>
    )
}

const GroupInfoPage = () => {

    return (
        <Container fluid style={{height:"80vh", overflow: "hidden"}}>
            <CheckIfBookingExist />
        </Container>
    )
}

export default GroupInfoPage;

