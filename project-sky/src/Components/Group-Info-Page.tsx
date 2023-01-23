import { loadRoomData } from "../shared/fetch/testdata";
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'

const {
    jsonRoomData
} = loadRoomData();

function CheckIfBookingExist() {

    const location = useLocation();
    var groupName: string = location.state.group

    const [check, setCheck] = useState<boolean>()
    let response = false;

    useEffect(() => {
        setCheck(response);
    }, [response])

    jsonRoomData.map(info => {
        if (info.bookedBy === groupName) {
            response = true;
        }
    })

    if (check === true) {
        return <GroupDetails />
    }

    return (
        <Row className="d-flex align-items-center justify-content-center customHeight text-center">
            <Col>
                <h1>No bookings could be found</h1>
            </Col>
        </Row>
    )
}

function GroupDetails() {

    const location = useLocation();

    var groupName: string = location.state.group

    return (
        <Row className="d-flex align-items-center justify-content-center customHeight">

            {
                jsonRoomData.map(info => info.bookedBy === groupName && (
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
        <Container>
            <CheckIfBookingExist />
        </Container>
    )
}

export default GroupInfoPage;

