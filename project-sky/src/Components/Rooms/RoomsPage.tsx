import { useEffect, useState } from "react";
import Room from "./Room";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/esm/Stack";
import { useOutletContext } from 'react-router-dom';

const RoomsPage = () => {

    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState([]);

    var currentDate = useOutletContext();
    console.log("Från roomspage: ", currentDate);
    

    useEffect(() => {
        fetch(`https://localhost:7054/api/Room/get-rooms-info?date=` + currentDate)
        .then(response => response.json())
        .then(res => setRooms(res))
        .catch(err => setError(err))
    },[currentDate])

    const [isOpen, setisOpen] = useState("");

    const handleOpen = (roomName: string) => {
      setisOpen(roomName)
    }

    return (   
        <Container>
            <Stack gap={5}>            
                {rooms.map((room: Room) => {return (
                    <Row className="room-info-row d-flex align-items-center justify-content-center" key={room.name}>
                        <Col className="room-info-col text-center" md={6}>
                            <Row>
                                <h2><i><b>{room.name}</b></i></h2>
                                <h4>Booked by: {room.groupName}</h4>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Seats: {room.seats}</h4>
                                </Col>
                                <Col>
                                    <h4>Available: {room.availableSeats}</h4>
                                </Col>
                            </Row>                    
                            <Row>
                            <hr/>
                              <Col>
                                {(() => {
                                  if(room.availableSeats <= 0) {
                                    return(
                                      <h5>No Available Seats</h5>
                                    )
                                  }
                                  else if (isOpen == room.name) {
                                    return (
                                      <button type="button" className="btn btn-primary">Book Seat</button>
                                    )
                                  }
                                  else {
                                    return (
                                      <h5 onClick={() => handleOpen(room.name)}>Book Available seat</h5>
                                    )
                                  }
                                })()}
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