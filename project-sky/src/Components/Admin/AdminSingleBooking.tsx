import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fetchAdminSingleRoomBooking, fetchDeleteBooking } from "../../shared/Fetch/AdminSingleRoomBooking";
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
    console.log(response)
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
                // groups={groups}
                // rooms={rooms}
            />
        </Container>
    )
}

export default AdminSingleBooking;

