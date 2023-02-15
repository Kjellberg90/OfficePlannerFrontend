import React, { useEffect, useState} from "react";
import Room from "./RoomInfo";
import Container from "react-bootstrap/Container";
import { Button, Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/esm/Stack";
import { useOutletContext, useRoutes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faTrash } from "@fortawesome/free-solid-svg-icons"
import SingleUser from "./SingleUser";
import { DeleteSingleBookingModal } from "./Modals/DeleteSingleBookingModal";

const RoomsPage = () => {

    const [rooms, setRooms] = useState([]);
    const [users, setUsers] = useState([]);
    const [err, setError] = useState([]);
    const [isOpenBook, setisOpenBook] = useState<number>();
    const [isOpenDrop, setisOpenDrop] = useState<number>();
    const [id, setid] = useState<number>();
    const [name, setname] = useState("");
    const [deleteUser, setdeleteUser] = useState({});

    var currentDate: string = useOutletContext();
    
    

const test = async () => {
        await fetch(`https://localhost:7054/api/Room/get-rooms-info?date=` + currentDate)
        .then(response => response.json())
        .then(res => { setRooms(res)})
        .catch(err => setError(err))
    }

    useEffect(() => {
        test()
    },[currentDate])


    const Fetchusers = async (roomId: number) =>{
      await fetch(`https://localhost:7054/api/Booking/GetSingleBookings?date=${currentDate}&roomId=${roomId}`)
      .then((response) => response.json())
      .then (res => {setUsers(res)}) 
      .catch((error) => {
        console.log("error", error);
      })
    }

    const handleOpenBook = (roomId: number) => {
      setisOpenBook(roomId)
      setisOpenDrop(NaN);
    }

    const handleOpenDrop = (roomId: number) => {
      setisOpenDrop(roomId)
      setisOpenBook(NaN)
      Fetchusers(roomId)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setisOpenBook(NaN)       
        const data ={ "roomId": id, "date": currentDate, "name": name}
        fetch("https://localhost:7054/api/Booking/SingleBooking", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then((response) => {
          if(!response.ok) throw new Error(response.status.toString());
        })
        .then(() => test())
        .catch((error) => {
          console.log("error", error);
        })

      }

    const [show, setShow] = useState(false);

const deleteSingleBooking = () => {  
  // const data ={ "date": date, "userName": userName, "roomId": roomId}
  const data = deleteUser
  fetch("https://localhost:7054/api/Booking/DeleteSingleBooking", {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    if(!response.ok) throw new Error(response.status.toString());
  })
  .then(() => test())
  .catch((error) => {
    console.log("error", error);
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
                                    <h5>Booked: {room.seats - room.availableSeats} / {room.seats}</h5>
                                </Col>
                                <Col>
                                {(() => {
                                  if(room.availableSeats > 0){
                                      return(
                                          <h5>Available: <FontAwesomeIcon icon={ faCheck } className="checkRoom" /></h5>
                                        ) 
                                      }else {
                                          return(
                                          <h5>Available: <FontAwesomeIcon icon={ faXmark } className="crossRoom" /></h5>
                                        )
                                      }
                                })()}
                                </Col>
                            </Row>                    
                            <Row>
                              <Col className="p-0 hrDivider" >
                                {(() => {
                                  if (isOpenBook === room.roomId) {
                                    return (
                                      <div>
                                      <form id="bookSingleBooking" className="form-inline"  onSubmit={handleSubmit}>
                                        <div className="form-group mx-sm-3 mb-2 mt-2">
                                          <input type="search" id="name" required className="form-control" placeholder="Name" onChange={(event) => {setname(event.target.value); setid(room.roomId)}} />
                                        </div>
                                      </form>
                                        <button onClick={() => setisOpenBook(NaN)} className="dangerButton mb-2">Cancel</button>
                                        <button form="bookSingleBooking" type="submit" className="bookButton roomsPageSubmitButton">Book Seat</button>
                                      </div>
                                    )
                                  }
                                  else if (isOpenDrop === room.roomId) {
                                        return (
                                          <div>
                                          {
                                              users.map((user: SingleUser) => {
                                                    return(
                                                        <div className="d-flex justify-content-between align-items-center singleBookingUserDiv" key={user.id}>
                                                          <h4 className="singleBookingUserList">{user.userName} </h4><FontAwesomeIcon icon={ faTrash } onClick={() => {setShow(true); ; setdeleteUser({date: currentDate, userName: user.userName, roomId: room.roomId})}} className="crossRoom" />
                                                        </div>
                                                    );
                                                  })
                                              }
                                            <div className="mx-sm-3 mb-2 mt-2">
                                              <button className="dropButton" onClick={() => setisOpenDrop(NaN)}>Cancel</button>
                                            </div>
                                          </div>
                                        )                                    
                                  }
                                  else if(room.availableSeats <= 0) {
                                    return(
                                      <div className="mx-sm-3 mb-2 mt-2">
                                        <button className="dropButton" onClick={() => handleOpenDrop(room.roomId)}>Drop Seat</button>
                                      </div>
                                    )
                                  }
                                  else {
                                    return (
                                      <div className="mx-sm-3 mb-2 mt-2">
                                        <button className="dropButton" onClick={() => {handleOpenDrop(room.roomId)}}>Drop Seat</button>
                                        <button className="primaryButton bookButton" onClick={() => handleOpenBook(room.roomId)} >Book Seat</button>
                                      </div>
                                    )
                                  }
                                })()}
                              </Col>
                            </Row>
                        </Col>
                    </Row>
                )} )}     
            </Stack>
            <DeleteSingleBookingModal
                show={show}
                onHide={() => {test(); setShow(false); setisOpenDrop(NaN);}}
                user={deleteUser}
                delete={() => {deleteSingleBooking(); setShow(false); setisOpenDrop(NaN)}}
            />
        </Container>
    )
}

export default RoomsPage;