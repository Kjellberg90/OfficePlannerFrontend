import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { loadRoomData } from "../shared/fetch/testdata";
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';


const {
    jsonRoomData
} = loadRoomData();

let fakeProp = "DQT 6"

// Props: any för tillfället eftersom den inte gillade att jag körde med props: string, kanske för att jag har min fakeprop utanför?
function CheckIfBookingExist(props: any) {

    const [check, setCheck] = useState<boolean>()
    let response = false;

    useEffect(() => {
        setCheck(response);
    }, [response])

    jsonRoomData.map(info => {
        if (info.bookedBy === fakeProp) {
            response = true;
        }
    })


    if (check == true) {
        return <GroupDetails />
    }

    return (
        <div className="d-flex align-items-center justify-content-center">
            <h1>No bookings could be found</h1>
        </div>
    )
}

function GroupDetails() {

const location = useLocation();

var [groupName, setgroupName] = useState("")

useEffect(() => {
  setgroupName(location.state.group)
})

    return (
        <Col lg={{ span: 6, offset: 3 }}>
          <h1>{groupName}</h1>
            <div className="selectionBox">
                {
                    jsonRoomData.map(info => info.bookedBy == fakeProp && (
                        <h2 className="boxTextStartPage d-flex align-items-center justify-content-center">
                            Team: {info.bookedBy} <br />
                            Room: {info.roomName} <br />
                            Seatings: {info.seating} <br />
                            {info.startTime} - {info.endTime}
                        </h2>
                    )
                    )};
            </div>
        </Col>
    )
}

const GroupInfoPage = () => {

    return (
        <Container>
            <Stack gap={5}>
                <Row>
                    <CheckIfBookingExist />
                </Row>
            </Stack>
        </Container>
    )
}

export default GroupInfoPage;

