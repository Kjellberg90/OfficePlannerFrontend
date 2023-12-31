import React, { useContext, useEffect, useState, ChangeEvent, useCallback } from "react";
import RoomInfo from "./RoomsInterfaces/RoomInfo";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/esm/Stack";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faTrash } from "@fortawesome/free-solid-svg-icons"
import SingleUser from "./RoomsInterfaces/SingleUser";
import { DeleteSingleBookingModal } from "./Modals/DeleteSingleBookingModal";
import IdleUser from "../../shared/IdleUser/IdleUser";
import { RoomMapModal } from "./Modals/RoomsMapModal";
import { DateContext } from "../../shared/DateContext";
import { fetchRooms, fetchSingleBookings, fetchDeleteSingleBookings, fetchPostSingleBookings } from "../../shared/Fetch/RoomFetches";

const RoomsPage = () => {

  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [isOpenBook, setisOpenBook] = useState<number>();
  const [isOpenDrop, setisOpenDrop] = useState<number>();
  const [id, setid] = useState<number>();
  const [name, setname] = useState<string>("");
  const [pin, setPin] = useState<string>("");
  const [deleteUser, setdeleteUser] = useState({ date: '', name: '', roomId: 0, password: pin });
  const [show, setShow] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [error, setError] = useState<string>("");

  var { currentDate } = useContext(DateContext)

  IdleUser(); //Sets Idle Timer

  const getRoomInfo = useCallback(async () => {
    try {
      const response = await fetchRooms(currentDate);
      setRooms(response);
    } catch (error) {
      console.error(error);
    }
  }, [currentDate]);

  useEffect(() => {
    getRoomInfo()
  }, [getRoomInfo]);
  
  useEffect(() => {
    setisOpenBook(NaN)
  }, [currentDate]);
  
  useEffect(() => {
    setisOpenDrop(NaN)
  }, [currentDate]);

  async function GetSingleBookings(roomId: number) {
    try {
      const response: any = await fetchSingleBookings(currentDate, roomId);
      setUsers(response);
    } catch (error) {
      console.error(error);
    }
  }

  const handleOpenBook = (roomId: number) => {
    setisOpenBook(roomId)
    setisOpenDrop(NaN);
  }

  const handleOpenDrop = (roomId: number) => {
    setisOpenDrop(roomId)
    setisOpenBook(NaN)
    GetSingleBookings(roomId)
  }

  const handleOpenMap = () => {
    setShowMap(true);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPin(val);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setisOpenBook(NaN)

    PostSingleBooking()
  }

 async function PostSingleBooking() {
    const postData = { "roomId": id, "date": currentDate, "name": name, "password": pin }
    try {
      await fetchPostSingleBookings(postData)
      getRoomInfo();
      setPin("");
    } catch (error) {
      console.error(error);
    }
  }

  const userToDelete = (userName: string, roomId: number) => {
    setdeleteUser({ date: currentDate, name: userName, roomId: roomId, password: pin })
  }

  const deleteSingleBooking = async (e: any) => {
    try{
      e.preventDefault();
      const delUser = {"roomId": deleteUser.roomId, "date": currentDate, "name": deleteUser.name, "password": pin};
      
      await fetchDeleteSingleBookings(delUser);
      setShow(false); 
      setisOpenDrop(NaN);
      getRoomInfo();
      setError("");
      setPin("");
     } catch (error: any) {
      console.error("error: ", error);
      setError(error.response.data);
     }
  }
  


  return (
    <Container className="px-4">
      <div id="test" className="d-flex justify-content-center">
        <div id="subTest">
          <span className="status"></span>
        </div>
      </div>
      <Stack gap={4}>
        {rooms.map((room: RoomInfo) => {
          var singleSeatBooked = room.singleBookings > 0 ? true : false;
          var availableSeats = room.availableSeats > 0 ? true : false;
          return (
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
                      var icon = room.availableSeats > 0 ? faCheck : faXmark;
                      var iconColor = room.availableSeats > 0 ? "checkRoom" : "crossRoom"
                      return (
                        <h5>Available: <FontAwesomeIcon icon={icon} className={iconColor} /></h5>
                      )
                    })()}
                  </Col>
                </Row>
                <Row>
                  <Col className="p-0 hrDivider" >
                    {(() => {
                      if (isOpenBook === room.roomId) {
                        return (
                          <div>
                            <form id="bookSingleBooking" className="form-inline" onSubmit={handleSubmit}>
                              <div className="form-group mx-sm-3 mb-2 mt-2">
                                <input type="search" id="name" required className="form-control" placeholder="Name" onChange={(event) => { setname(event.target.value); setid(room.roomId) }} />
                                <input type="password" className="form-control" placeholder="Password" onChange={(e) => handleChange(e)} />
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
                                if (users.length > 0) {
                                  return (
                                    users.map((user: SingleUser) => {
                                      return (
                                        <div className="d-flex justify-content-between align-items-center singleBookingUserDiv" key={user.id}>
                                          <h4 className="singleBookingUserList">{user.userName} </h4><FontAwesomeIcon icon={faTrash} onClick={() => { setShow(true);; userToDelete(user.userName, room.roomId) }} className="crossRoom dropRoom" />
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
                      else {
                        return (
                          <div className="mx-sm-3 mb-2 mt-2">
                            <button disabled={!singleSeatBooked} className="dropButton mx-2" onClick={() => handleOpenDrop(room.roomId)}>Drop Seat</button>
                            <button disabled={!availableSeats} className="bookButton mx-2" onClick={() => handleOpenBook(room.roomId)} >Book Seat</button>
                          </div>
                        )
                      }
                    })()}
                  </Col>
                </Row>
              </Col>
            </Row>
          )
        })}
        <Row>
          <Col className="mapBtnCol d-flex mt-0">
            <button className="mapBtn" onClick={handleOpenMap}>Show Map</button>
          </Col>
        </Row>
      </Stack>
      <DeleteSingleBookingModal
        show={show}
        onHide={() => { getRoomInfo(); setShow(false); setisOpenDrop(NaN); setError("");}}
        user={deleteUser}
        handleChange={handleChange}
        delete={(e) => { deleteSingleBooking(e); }}
        errorMessage = {error}
      />
      <RoomMapModal
        show={showMap}
        onHide={() => { setShowMap(false); }}
      />
    </Container>
  )
}

export default RoomsPage;