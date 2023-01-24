import { Fragment, useEffect, useState } from "react";
import Room from "./Room";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/esm/Stack";
import { useOutletContext } from 'react-router-dom';

const RoomsPage = () => {

    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7054/api/Room/get-rooms-info")
        .then(response => response.json())
        .then(res => setRooms(res))
        .catch(err => setError(err))
    },[])

    const currentDate = useOutletContext(); //Tanken att den här ska ta emot datom från layoutfil
    console.log(currentDate)

    return (   
        <Container>
            <Stack gap={5}>            
                {rooms.map((room: Room) => {return (
                    <Row className="room-info-row" key={room.name}>
                        <Col md={{span:6, offset:3}} className="room-info-col text-center">
                            <Row>
                                <h2><i><b>{room.name}</b></i></h2>
                                <h4>{room.bookedBy != null ? "Booked by: " + room.bookedBy : "Not booked"}</h4>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Seats: {room.seats}</h4>
                                </Col>
                                <Col>
                                    <h4>Available: {room.availableSeats}</h4>
                                </Col>
                            </Row>                    
                        </Col>
                    </Row>
                )} )}          
            </Stack>
        </Container>
    )
}

export default RoomsPage;