import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useOutletContext } from 'react-router-dom';
import RoomOverview from "../Rooms/RoomOverview";
import { format } from "date-fns";

const AdminHomePage = () => {

    const [rooms, setRooms] = useState([]);
    var currentDate: string = useOutletContext();

    const [date, setDate] = useState(format(new Date, "yyyy-MM-dd"))

    
    const RoomOverviewFetch = () => {
        fetch(`https://localhost:7054/api/Room/adminOverview/` + date)
        .then(response => response.json())
        .then(res => { setRooms(res);
            console.log(res);})
        }

    useEffect(() => {
        RoomOverviewFetch();
    },[])
        
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(date);
        RoomOverviewFetch();
    }


    return (
        <Container className="adminHomePageContainer">
            <Row className="d-flex mb-3">
                <Col className="justify-contend-end">
                    <h3 className="adminHeader">Weekly schedule</h3>
                </Col>
                <Col>
                    <form onSubmit={onSubmit} className="d-flex w-100 justify-content-end">
                        <input type="text" value={date} onChange={(e) => {setDate(e.target.value)}} className="adminDateInput"></input>
                        <button type="submit" className="btn btn-secondary">Enter</button>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <table className="adminHomeTable">
                        <thead>
                            <tr className="adminHomeTableHeader">
                                <th scope="col">Rooms</th>
                                <th scope="col">Monday</th>
                                <th scope="col">Tuesday</th>
                                <th scope="col">Wednesday</th>
                                <th scope="col">Thursday</th>
                                <th scope="col">Friday</th>
                                <th scope="col">Saturday</th>
                                <th scope="col">Sunday</th>
                            </tr>
                        </thead>
                        <tbody className="adminHomeTableBody">
                            {rooms.map((room: RoomOverview) => { return (
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
                            )})}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminHomePage;