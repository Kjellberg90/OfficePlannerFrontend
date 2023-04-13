import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RoomOverview from "../Rooms/RoomsInterfaces/RoomOverview";
import { format } from "date-fns";
import { fetchGroupsOverviewDate } from "../../shared/Fetch/AdminHomeFetches";

const AdminHomePage = () => {

    const [rooms, setRooms] = useState([]);

    const [date, setDate] = useState(format(new Date, "yyyy-MM-dd"));

      async function RoomOverviewFetch() {
        try {
            const response: any = await fetchGroupsOverviewDate(date, 1);
            setRooms(response);
        } catch (error) {
            console.error(error);
        }
      }

    useEffect(() => {
        RoomOverviewFetch();
    }, [])

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        RoomOverviewFetch();
    }

    return (
        <Container className="adminHomePageContainer">
            <Row className="d-flex mb-3">
                <Col className="justify-contend-end">
                    <h3 className="headerSecondaryColor">Weekly schedule</h3>
                </Col>
                <Col>
                    <form onSubmit={onSubmit} className="d-flex w-100 justify-content-end">
                        <input type="text" value={date} onChange={(e) => { setDate(e.target.value) }} className="adminDateInput"></input>
                        <button type="submit" className="btn btn-secondary">Enter</button>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <table className="adminTable adminHomePageTable">
                        <thead>
                            <tr className="adminTableHeader">
                                <th scope="col">Room</th>
                                <th scope="col">Monday</th>
                                <th scope="col">Tuesday</th>
                                <th scope="col">Wednesday</th>
                                <th scope="col">Thursday</th>
                                <th scope="col">Friday</th>
                                <th scope="col">Saturday</th>
                                <th scope="col">Sunday</th>
                            </tr>
                        </thead>
                        <tbody className="adminTableBody">
                            {rooms.map((room: RoomOverview) => {
                                return (
                                    <tr key={room.roomName}>
                                        <th className="adminHomeTableRooms" scope="row">{room.roomName}</th>
                                        <td>{room.groupNames[0]}</td>
                                        <td>{room.groupNames[1]}</td>
                                        <td>{room.groupNames[2]}</td>
                                        <td>{room.groupNames[3]}</td>
                                        <td>{room.groupNames[4]}</td>
                                        <td>{room.groupNames[5]}</td>
                                        <td>{room.groupNames[6]}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminHomePage;