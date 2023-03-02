import React, { useContext, useEffect, useState} from "react";
import Room from "./RoomInfo";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/esm/Stack";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faTrash } from "@fortawesome/free-solid-svg-icons"
import SingleUser from "./SingleUser";
import { DeleteSingleBookingModal } from "./Modals/DeleteSingleBookingModal";
import IdleUser from "../../shared/IdleUser/IdleUser";
import { RoomMapModal } from "./Modals/RoomsMapModal";
import { DateContext } from "../../shared/DateContext";
import { fetchRooms, fetchSingleBookings, fetchDeleteSingleBookings, fetchPostSingleBookings } from "../../shared/Fetch/RoomFetches";

const RoomsPage = () => {

    const [rooms, setRooms] = useState([]);
    const [users, setUsers] = useState([]);
    const [err, setError] = useState([]);
    const [isOpenBook, setisOpenBook] = useState<number>();
    const [isOpenDrop, setisOpenDrop] = useState<number>();
    const [id, setid] = useState<number>();
    const [name, setname] = useState("");
    const [deleteUser, setdeleteUser] = useState({});
    
    var {currentDate} = useContext(DateContext)

IdleUser(); //Sets Idle Timer

const resetDateIfEmptyString = () => {
  console.log("ResetDateIfEmptyString: ", currentDate)
  if (currentDate === ""){
    currentDate = new Date().toLocaleDateString("sv-SE")
    console.log("Inne i If Sats: ", currentDate)
  }
}

    async function getRoomInfo() {
      resetDateIfEmptyString()
      const response: any = await fetchRooms(currentDate)
      setRooms(response)
    }

    useEffect(() => {
        getRoomInfo()
        setisOpenBook(NaN)
        setisOpenDrop(NaN)
    },[currentDate])

async function getSingleBookings(roomId: number){
  resetDateIfEmptyString()
  const response: any = await fetchSingleBookings(currentDate, roomId)
  setUsers(response)
}

    const handleOpenBook = (roomId: number) => {
      setisOpenBook(roomId)
      setisOpenDrop(NaN);
    }

    const handleOpenDrop = (roomId: number) => {
      setisOpenDrop(roomId)
      setisOpenBook(NaN)
      getSingleBookings(roomId)
    }

    const handleOpenMap = () => {
      setShowMap(true);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setisOpenBook(NaN)       
        
        postSingleBooking()
      }

    const [show, setShow] = useState(false);
    const [showMap, setShowMap] = useState(false);

const postSingleBooking = () => {
  resetDateIfEmptyString()
  const postData ={ "roomId": id, "date": currentDate, "name": name}
  fetchPostSingleBookings(postData)
    .then(() => getRoomInfo())
}

const userToDelete = ( userName: string, roomId: number) => {
  resetDateIfEmptyString()
  setdeleteUser({date: currentDate, userName: userName, roomId: roomId})
}

const deleteSingleBooking = () => {
  fetchDeleteSingleBookings(deleteUser)
    .then(() => getRoomInfo())
}

    return (   
        <Container>
            <Stack gap={4}>            
                {rooms.map((room: Room) => {return (
                    <Row className="d-flex align-items-center justify-content-center" key={room.name}>
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
                                            (() => {
                                              if (users.length > 0 ){
                                                return (
                                                  users.map((user: SingleUser) => {
                                                        return(
                                                            <div className="d-flex justify-content-between align-items-center singleBookingUserDiv" key={user.id}>
                                                              <h4 className="singleBookingUserList">{user.userName} </h4><FontAwesomeIcon icon={ faTrash } onClick={() => {setShow(true); ; userToDelete( user.userName, room.roomId )}} className="crossRoom" />
                                                              {/* <h4 className="singleBookingUserList">{user.userName} </h4><FontAwesomeIcon icon={ faTrash } onClick={() => {setShow(true); ; setdeleteUser({date: currentDate, userName: user.userName, roomId: room.roomId})}} className="crossRoom" /> */}
                                                            </div>
                                                        );
                                                      })
                                                )
                                              } else {
                                                return <h3 className="mt-2">No seats to drop</h3>
                                              }
                                              })()}
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
                                  else if (room.seats - room.availableSeats === 0) {
                                    return (
                                      <div className="mx-sm-3 mb-2 mt-2">
                                        <button className="primaryButton bookButton" onClick={() => handleOpenBook(room.roomId)} >Book Seat</button>
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
                onHide={() => {getRoomInfo(); setShow(false); setisOpenDrop(NaN);}}
                user={deleteUser}
                delete={() => {deleteSingleBooking(); setShow(false); setisOpenDrop(NaN)}}
            />
            <RoomMapModal
                show={showMap}
                onHide={() => {setShowMap(false); }}
            />
            <Col className="mapBtnCol d-flex">
              <button className="mapBtn" onClick={handleOpenMap}>Show Map</button>
            </Col>
        </Container>
    )
}

export default RoomsPage;