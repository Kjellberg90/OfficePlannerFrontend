import { useState, useLayoutEffect, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom';
import Groups from './groupsInterface'
import IdleUser from "../../shared/IdleUser/IdleUser";
import SmallerMap from "../../shared/Map/SmallerMap";

const GroupInfoPage = () => {

    const [group, setGroup] = useState<Groups>();
    const currentDate: Date = useOutletContext();
    const location = useLocation();
    var groupId: string = location.state.group.id

    const [loading, setLoading] = useState<boolean>(true);
    const [error ,setError] = useState([]);
    const [roomName, setRoomName] = useState<string>();
    
    IdleUser(); //Sets Idle Timer

    useLayoutEffect(() => {

        fetch(`https://localhost:7054/api/Group/GroupInfo/${currentDate}&${groupId}`)
            .then(response => response.json())
            .then(res => {
                setGroup(res)
                setLoading(false)
                
            })
            .catch(err => setError(err))
    }, [currentDate, groupId])

    useEffect(() => {
        var roomName = group?.bookedRoom?.name.toLowerCase();
                setRoomName(roomName)
        }
      )

    const name = roomName!;

    if (group?.bookedRoom === null) {

        return (
            <Container fluid style={{ height: "80vh", overflow: "hidden" }}>
                <Row className="d-flex align-items-center justify-content-center text-center" style={{ height: "80vh", overflow: "hidden" }}>
                    <>
                        {loading ?
                            <h1>Loading</h1> :
                            <Col>
                                <h1>No bookings could be found</h1>
                            </Col>
                        }
                    </>
                </Row>
            </Container>
        )
    }
    else {

        return (
            <Container fluid style={{ height: "80vh", overflow: "hidden" }}>
                <Row className="d-flex align-items-center justify-content-center text-center" style={{ height: "80vh", overflow: "hidden" }}>
                    {
                        <>
                            {loading ?
                                <h1>Loading</h1> :
                                <Col className="groupInfoCard" key={groupId} md={6} lg="auto" xl="auto">
                                    <h2>Room: {group?.bookedRoom?.name}</h2>
                                    <h2>Booked By Team: {group?.name}</h2>
                                    <h2>{currentDate.toString()}</h2>
                                <SmallerMap name={name}/>
                                </Col>
                            }
                        </>
                    }
                </Row>
            </Container>
        )
    }
}

export default GroupInfoPage;