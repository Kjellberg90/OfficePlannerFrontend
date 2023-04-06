import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fetchAdminRooms } from "../../shared/Fetch/AdminRoomFetches";
import { fetchAdminSingleRoomBooking, fetchDeleteBooking, fetchDeleteOldBookings, fetchPostNewBooking, fetchPutBooking } from "../../shared/Fetch/AdminSingleRoomBooking";
import { fetchGroups } from "../../shared/Fetch/GroupFetches";
import { AddBookingModal, DeleteBookingModal, EditBookingModal } from "./AdminModals/SingleBookingModals";


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
  const [showEditBooking, setshowEditBooking] = useState(false);
  const [groups, setGroups] = useState([]);
  const [rooms, setRooms] = useState([]);

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

async function DeleteOldBookings() {
  const response: any = await fetchDeleteOldBookings()
  .then(() => GetBookings())
}

async function GetGroups() {
  const response: any = await fetchGroups()
setGroups(response)
}
    
async function GetRooms() {
  const response: any = await fetchAdminRooms()
  setRooms(response)
}

useEffect(() => {
  GetGroups()
  GetRooms()
}, [])


async function AddBooking() {
  await fetchPostNewBooking(formData)
}
async function EditBooking() {
  await fetchPutBooking(currentBooking?.id, formData)
  .then(() => GetBookings())
}

const [formData, setFormData] = useState({
  groupId: 1, 
  roomId: 1,
  date: ""
})

const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}


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
                                          setshowEditBooking(true);
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
                    <button type="button" className="btn btn-primary mt-3 mb-3  " onClick={() => setshowAddBooking(true)}>Add Booking</button>
                    <button type="button" className="btn btn-danger mt-3 mb-3 ms-3" onClick={() => {DeleteOldBookings();}}>Delete Old Bookings</button>
                </Col>
            </Row>
            <DeleteBookingModal 
              show={showDeleteBooking}
              onHide={() => setShowDeleteBooking(false)}
              booking={currentBooking}
              handleDelete={() => {DeleteBooking(); setShowDeleteBooking(false)}}
            
              />
            <AddBookingModal
                show={showAddBooking}
                onHide={() => {setshowAddBooking(false)}}
                groups={groups}
                rooms={rooms}
                onSubmit={() => AddBooking()}
                updatedvalue={HandleChange}
            />
            <EditBookingModal
                show={showEditBooking}
                onHide={() => {setshowEditBooking(false)}}
                groups={groups}
                rooms={rooms}
                onSubmit={() => EditBooking()}
                updatedvalue={HandleChange}
            />
        </Container>
    )
}

export default AdminSingleBooking;

