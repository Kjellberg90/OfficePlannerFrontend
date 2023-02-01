import { useEffect, useState} from "react";
import Room from "./Room";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/esm/Stack";
import { useOutletContext } from 'react-router-dom';

const RoomsPage = () => {

    const [rooms, setRooms] = useState([]);
    const [, setError] = useState([]);

    var currentDate = useOutletContext();
    

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

    const [id, setid] = useState<number>();
    const [name, setname] = useState("");

    const handleSubmit = () => {
        const data ={ "roomId": id, "date": currentDate, "name": name}
        fetch("https://localhost:7054/api/Booking/SingleBooking", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
      }

    return (   
        <Container>
            <Stack gap={4}>            
                {rooms.map((room: Room) => {return (
                    <Row className="room-info-row d-flex align-items-center justify-content-center" key={room.name}>
                        <Col className="room-info-col text-center" md={6}>
                            <Row>
                                <h2><b>{room.name}</b></h2>
                                {room.groupName === "" ? <h4><i>Unbooked</i></h4> : <h4><b>{room.groupName}</b></h4>}
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Seats: {room.seats}</h5>
                                </Col>
                                <Col>
                                    <h5>Available: {room.availableSeats}</h5>
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
                                  else if (isOpen === room.name) {
                                    return (
                                      <form className="form-inline"  onSubmit={handleSubmit}>
                                        <div className="form-group mx-sm-3 mb-2">
                                        <input type="text" id="name"  className="form-control" placeholder="Name" onChange={(event) => {setname(event.target.value); setid(room.roomId)}} />
                                        </div>
                                        <button type="submit" className="btn btn-primary mb-2">Book Seat</button>
                                        <button type="button" onClick={() => setisOpen("")} className="btn btn-danger mb-2">Cancel</button>
                                      </form>
                                    )
                                  }
                                  else {
                                    return (
                                      <h5 onClick={() => handleOpen(room.name)} className="roomPage-seats">Book Available seat</h5>
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