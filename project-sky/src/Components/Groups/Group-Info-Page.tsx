import { useState, useLayoutEffect} from "react"
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom';
import Groups from './groupsInterface'

const GroupInfoPage = () => {

    const [group, setGroup] = useState<Groups>();
    const currentDate: Date = useOutletContext();
    const location = useLocation();
    var groupId: string = location.state.group.id

    const [loading, setLoading] = useState<boolean>(true);
    const [, setError] = useState([]);

    useLayoutEffect(() => {

        fetch(`https://localhost:7054/api/Group/GroupInfo/${currentDate}&${groupId}`)
            .then(response => response.json())
            .then(res => {
                setGroup(res)
                setLoading(false)
            })
            .catch(err => setError(err))
    }, [currentDate])


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