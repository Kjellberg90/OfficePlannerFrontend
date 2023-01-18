import { Fragment, useEffect, useState } from "react";
import Room from "./Room";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/esm/Stack";



const RoomsPage = () => {

    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState([]);
    

    useEffect(() => {
        fetch("https://localhost:7054/api/Rooms/get-rooms-info")
        .then(response => response.json())
        .then(res => setRooms(res))
        .catch(err => setError(err))
    },[])

    return (
        <Stack gap={5}>            
            <Fragment>            
                {rooms.map((room: Room) => {return (
                    <Row className="room-info-row">
                        <Col lg={{span:6, offset:3}} className="room-info-col text-center">
                            <Row>
                                <h2>{room.name}</h2>
                            </Row>
                            <Row>
                                <Col>
                                    <h3>Seats: {room.seats}</h3>
                                </Col>
                                <Col>
                                    <h3>Available: {room.availableSeats}</h3>
                                </Col>
                            </Row>                    
                        </Col>
                    </Row>
                )} )}        
            </Fragment>        
        </Stack>
    )
}

export default RoomsPage;