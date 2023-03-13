import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fetchAdminRooms } from "../../shared/Fetch/AdminRoomFetches";
import { fetchAdminSingleRoomBooking, fetchDeleteBooking, fetchPostNewBooking } from "../../shared/Fetch/AdminSingleRoomBooking";
import { fetchGroups } from "../../shared/Fetch/GroupFetches";
import { AddBookingModal, DeleteBookingModal } from "./AdminModals/SingleBookingModals";


interface SingleRoomBooking {
    id: number,
    roomName: string,
    groupName: string
    date: string
}


const AdminSingleBooking = () => {

  const [bookings, setbookings] = useState<SingleRoomBooking[]>([]);
  const [currentBooking, setcurrentBooking] = useState<SingleRoomBooking>();
  const [showDeleteBooking, setShowDeleteBooking] = useState(false);
  const [showAddBooking, setshowAddBooking] = useState(false);

  async function GetBookings() {
    const response: any = await fetchAdminSingleRoomBooking()
    setbookings(response)
  }

  useEffect(() => {
    GetBookings()
}, [])


async function DeleteBooking() {
  const Id: any = currentBooking?.id
  await fetchDeleteBooking(Id)
    .then(() => GetBookings())
} 

const [groups, setGroups] = useState([]);
    
async function GetGroups() {
  const response: any = await fetchGroups()
setGroups(response)
}
const [rooms, setRooms] = useState([]);
    
async function GetRooms() {
  const response: any = await fetchAdminRooms()
  setRooms(response)
}

useEffect(() => {
  GetGroups()
  GetRooms()
}, [])


async function AddBooking() {
  console.log(formData)
  await fetchPostNewBooking(formData)
}


const [formData, setFormData] = useState({
  groupId: "", 
  roomId: "",
  date: ""
})

const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
})
console.log(formData)
}
  
  // useEffect(() => {
  //   setFormData({
  //       ...formData,
  //       ["roomId"]: formData.roomId,
  //       ["groupId"]: formData.groupId,
  //       ["date"]: formData.date
  //   })
  // }, [formData])




//----------------------------------------------------------------------------------

    return (
        <Container>
            <Row>
                <Col className="col-md-12 col-lg-6">
                <h3 className="headerSecondaryColor">Single Bookings</h3>
                    <table className="adminTable adminGroupsTable">
                        <thead>
                            <tr className="adminTableHeader">
                                <th className="groupTableName">Date</th>
                                <th className="groupTableMembers">Group Name</th>
                                <th className="groupTableMembers">Room Name</th>
                                <th className="groupTableActions">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="adminTableBody">
                            {bookings.map((booking: SingleRoomBooking) => { 
                                return(
                                <tr key={booking.id}>
                                    <td>{booking.date}</td>
                                    <td>{booking.groupName}</td>
                                    <td>{booking.roomName}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => {
                                            setcurrentBooking(booking); 
                                            // setShowUpdateRoom(true);
                                        }}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                        <button className="btn btn-danger" onClick={() => {
                                            setcurrentBooking(booking);
                                            setShowDeleteBooking(true);
                                        }}><FontAwesomeIcon icon={faTrash} /></button>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary mt-3 mb-3" onClick={() => setshowAddBooking(true)}>Add Booking</button>
                </Col>
            </Row>
            <DeleteBookingModal 
              show={showDeleteBooking}
              onHide={() => setShowDeleteBooking(false)}
              booking={currentBooking}
              delete={() => {DeleteBooking(); setShowDeleteBooking(false)}}
              />
            <AddBookingModal
                show={showAddBooking}
                onHide={() => {setshowAddBooking(false)}}
                booking={currentBooking}
                groups={groups}
                rooms={rooms}
                onSubmit={() => AddBooking()}
                updatedvalue={HandleChange}
                // setBooking={() => setNewBooking()}
            />
        </Container>
    )
}

export default AdminSingleBooking;

