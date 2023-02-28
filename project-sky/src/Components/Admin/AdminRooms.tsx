import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddRoomModal, UpdateRoomModal, DeleteRoomModal } from "./AdminModals";
import { fetchAdminRooms, fetchDeleteRoom, fetchPostNewRooom, fetchPutRoom } from "../../shared/Fetch/AdminRoomFetches";



interface AdminRoom {
  id: number;
  name: string;
  seats: number;
} // Interface tillagt då Room interface rooms inte fungerar i denna fil

const AdminRooms = () => {
    const [rooms, setRooms] = useState<AdminRoom[]>([]);
    const [error, setError] = useState();
    const [currentRoom, setCurrentRoom] = useState<AdminRoom>();
    const [showAddRoom, setShowAddRoom] = useState(false);
    const [showUppdateRoom, setShowUpdateRoom] = useState(false);
    const [showDeleteRoom, setShowDeleteRoom] = useState(false);
    
    async function GetRooms() {
      const response: any = await fetchAdminRooms()
      setRooms(response)
    }
    
    useEffect(() => {
        GetRooms()
    }, [])

    async function DeleteRoom() {
      const data = currentRoom
      await fetchDeleteRoom(data)
        .then(() => GetRooms())
    } 
    
    const [newValues, setNewValues] = useState<{name: string | undefined; seats: number | undefined; }>
        ({name: "", 
        seats: 0,
        });

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      let intValue = 0;
      if (e.target.type === "number") {
          intValue = parseInt(value, 10)
          setNewValues({
              ...newValues,
              [e.target.name]: intValue
          });
          return;
      }

       
      setNewValues({
          ...newValues,
          [e.target.name]: value
      });
  }

  useEffect(() => {
      setNewValues({
          ...newValues,
          ["name"]: currentRoom?.name,
          ["seats"]: currentRoom?.seats
      })
  }, [currentRoom])


async function UpdateRoom() {
  const roomId: any = currentRoom?.id
  await fetchPutRoom(newValues, roomId)
}

async function AddRoom() {
  await fetchPostNewRooom(newValues)
    .then(() => GetRooms())
}

    return (
        <Container>
            <Row>
                <Col className="col-md-12 col-lg-6">
                    <h3 className="headerSecondaryColor">Rooms</h3>
                    <table className="adminTable adminGroupsTable">
                        <thead>
                            <tr className="adminTableHeader">
                                <th className="groupTableId">Id</th>
                                <th className="groupTableName">Room Name</th>
                                <th className="groupTableMembers">Seats</th>
                                <th className="groupTableActions">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="adminTableBody">
                            {rooms.map((room: AdminRoom) => { 
                                return(
                                <tr key={room.name}>
                                    <td>{room.id}</td>
                                    <td>{room.name}</td>
                                    <td>{room.seats}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => {
                                            setCurrentRoom(room); 
                                            setShowUpdateRoom(true);
                                        }}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                        <button className="btn btn-danger" onClick={() => {
                                            setCurrentRoom(room);
                                            setShowDeleteRoom(true);
                                        }}><FontAwesomeIcon icon={faTrash} /></button>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary mt-3 mb-3" onClick={() => setShowAddRoom(true)}>Add Room</button>
                </Col>
            </Row>
            <AddRoomModal
                show={showAddRoom}
                onHide={() => {setShowAddRoom(false)}}
                updatedvalue={HandleChange}
                onSubmit={AddRoom}
            />
            <UpdateRoomModal 
                show={showUppdateRoom}
                onHide={() => setShowUpdateRoom(false)}
                updatedvalue={HandleChange}
                onSubmit={UpdateRoom}
                roomname={currentRoom?.name}
                seats={currentRoom?.seats}
            />
            <DeleteRoomModal 
                show={showDeleteRoom}
                onHide={() => setShowDeleteRoom(false)}
                room={currentRoom}
                delete={() => {DeleteRoom(); setShowDeleteRoom(false)}}
            />
        </Container>
    )
}

export default AdminRooms;

