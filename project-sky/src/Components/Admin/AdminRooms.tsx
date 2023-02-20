import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddRoomModal, UpdateRoomModal, DeleteRoomModal } from "./AdminModals";

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
        
    const FetchRooms = () => {
        fetch("https://localhost:7054/api/Room/adminGetRooms")
        .then(res => res.json())
        .then(res => {
            setRooms(res);
        })
        .catch(error => setError(error))
    }
    
    useEffect(() => {
        FetchRooms()
    }, [])

    const DeleteRoom = () => {
      const data = currentRoom
      fetch(`https://localhost:7054/api/Room/adminDeleteRooms`,{
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
          if(!response.ok) {
            throw new Error(response.status.toString())
          }
        })
        .then(() => FetchRooms())
        .catch((error) => {
            console.log("error", error)
        })
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


  const UpdateRoom = () => {
    fetch(`https://localhost:7054/api/Room/adminroomEditRoom?roomId=${currentRoom?.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newValues)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((err) => {
        setError(err);
        console.log("Error:", error);
    })
}

  const AddRoom = () => {
      fetch("https://localhost:7054/api/Room/adminAddRooms", {
          method: "POST",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newValues)
      })
      .then((response) => {
          if(!response.ok) throw new Error(response.status.toString());
      })
      .catch((error) => {console.log("Error", error)}
      )
  }

    return (
        <Container>
            <Row className="mb-3">
                <Col className="d-flex justify-content-between">
                    <h3 className="headerSecondaryColor">Rooms</h3>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-12 col-lg-6">
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
                </Col>
            </Row>
            <Row>
                <Col>
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

