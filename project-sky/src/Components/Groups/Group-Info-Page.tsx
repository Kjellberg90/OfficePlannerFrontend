import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom';
import Groups from './groupsInterface'
import Room from "../Rooms/Room";
import { group, info } from "console";
import RoomsPage from "../Rooms/RoomsPage";

function CheckIfBookingExist() {

interface BookedRoom {
    id: number,
    name: string,
    bookedBy: number
}

interface GroupItems {
    id: number,
    groupName: string,
    members: number,
    bookedRoom: BookedRoom[];
}

    const currentDate = useOutletContext();

    const location = useLocation();
    var groupId: string = location.state.group.id 
    console.log(groupId)

    const [group, setGroup] = useState([]);
    const [error, setError] = useState([]);
    const [check, setCheck] = useState<boolean>();
    let boolResponse = false;

    useEffect(() => {
        setCheck(boolResponse);
    }, [boolResponse])

    useEffect(() => {

        fetch(`https://localhost:7054/api/Group/GroupInfo/${currentDate}&${groupId}`)
            .then(response => response.json())
            .then(res => setGroup(res))
            .then(() => console.log("hello"))
            .catch(err => setError(err))
    }, [currentDate])

console.log(group)

    group.map((groupInfo: BookedRoom) => {
        var name = groupInfo.name;
        console.log(name)
    
        })


    // if (check === true) {
    //     return <GroupDetails />
    // }

    return (
        <Row className="d-flex align-items-center justify-content-center text-center" style={{ height: "80vh", overflow: "hidden" }}>
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
        <Row className="d-flex align-items-center justify-content-center" style={{ height: "80vh", overflow: "hidden" }}>

            {/* {
                jsonRoomData.map((info: any) => info.bookedBy === groupName && (
                    <Col className="groupInfoCard" key={groupId} md={6} lg="auto" xl="auto">
                        <h2>Room: {info.roomName}</h2>
                        <h2>Number of seatings: {info.seating}</h2>
                        <h2>Booked By Team: {info.bookedBy}</h2>
                        <h2>Time: {info.startTime} - {info.endTime}</h2>
                    </Col>
                )
                )} */}
        </Row>
    )
}

const GroupInfoPage = () => {

    return (
        <Container fluid style={{ height: "80vh", overflow: "hidden" }}>
            <CheckIfBookingExist />
        </Container>
    )
}

export default GroupInfoPage;

