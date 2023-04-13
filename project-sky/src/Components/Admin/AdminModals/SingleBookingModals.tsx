import { Fragment, useEffect, useState, ChangeEvent } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { AdminDeleteBookingModalProps, AdminGroup, AddBookingModalProps, AdminRoom, EditBookingModalProps, AdminDeleteAllBookingsModalProps } from "./AdminModalTypes";
import Groups from "../../Groups/GroupInterfaces/groupsInterface";

export const DeleteBookingModal = ({
  show,
  onHide,
  booking,
  handleDelete,
}: AdminDeleteBookingModalProps) => {
  return (
    <Fragment>
      <Modal
        show={show}
        onHide={onHide}
        booking={booking}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader>
          <h3>Delete Booking</h3>
        </ModalHeader>
        <ModalBody>
          <h6>Are you sure you want to delete booking?</h6>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete</button>
          <button type="button" onClick={onHide} className="btn btn-danger">Cancel</button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

export const AddBookingModal = ({
  show,
  onHide,
  onSubmit,
  updatedvalue,
  adminRooms,
  adminGroups,
  ...props
}: AddBookingModalProps) => {
  const [groups, setGroups] = useState<AdminGroup[]>([]);
  const [rooms, setRooms] = useState<AdminRoom[]>([]);
  const [dateValidation, setDateValidation] = useState<boolean>(true);
  const [dateValidationMessage, setDateValidationMessage] = useState<string>('');

  useEffect(() => {
    setGroups(adminGroups);
    setRooms(adminRooms);
  }, [adminGroups, adminRooms]);

const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
  const date = e.target.value;
  const isValid = !!date; //Date is not empty
  setDateValidation(isValid);
  updatedvalue(e);
  if (!isValid) {
    setDateValidationMessage('Date is required.');
  } else {
    setDateValidationMessage('');
  }
}

  return (
    <Fragment>
      <Modal show={show} onHide={onHide} {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader>
          <h3>Add Booking</h3>
        </ModalHeader>
        <ModalBody>
          <form id="addSingleBookingModalForm">
            <select placeholder="Select Group" name="groupId" id="groupId" onChange={updatedvalue}>
              {
                groups.map((group: AdminGroup) => {
                  return <option id="groupName" key={group.id} value={group.id} >{group.name}</option>
                })
              }
            </select>
            <select placeholder="Select Room" name="roomId" id="roomId" onChange={updatedvalue}>
              {
                rooms.map((room: AdminRoom) => {
                  return <option key={room.id} value={room.id}>{room.name}</option>
                })
              }
            </select>
            <input type="date" name="date" onChange={handleDateChange} />
            {!dateValidation && (
              <div style={{ color: 'red' }}>{dateValidationMessage}</div>
            )}
          </form>
        </ModalBody>
        <ModalFooter>
          <button form="addSingleBookingModalForm" type="submit" className="btn btn-primary" onClick={onSubmit}>Book</button>
          <button type="button" onClick={onHide} className="btn btn-danger">Cancel</button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

export const EditBookingModal = ({
  show,
  onHide,
  onSubmit,
  updatedvalue,
  rooms,
  groups,
  ...props }: EditBookingModalProps) => {
  const [selectedGroups, setSelectedGroups] = useState<Groups[]>([]);
  const [selectedRooms, setSelectedRooms] = useState<AdminRoom[]>([]);

  useEffect(() => {
    setSelectedGroups(groups);
    setSelectedRooms(rooms);
  }, [groups, rooms]);

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader>
          <h3>Update Booking</h3>
        </ModalHeader>
        <ModalBody>
          <form id="EditSingleBookingModalForm">
            <select placeholder="Select Group" name="groupId" id="groupId" onChange={updatedvalue}>
              {selectedGroups.map((group: Groups) => (
                <option id="groupName" key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
            <select placeholder="Select Room" name="roomId" id="roomId" onChange={updatedvalue}>
              {selectedRooms.map((room: AdminRoom) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
            <input type="date" name="date" onChange={updatedvalue} />
          </form>
        </ModalBody>
        <ModalFooter>
          <button
            form="EditSingleBookingModalForm"
            type="submit"
            className="btn btn-primary"
            onClick={onSubmit}
          >
            Update
          </button>
          <button type="button" onClick={onHide} className="btn btn-danger">
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export const DeleteAllBookinsgModal = ({
  show,
  onHide,
  handleDelete,
}: AdminDeleteAllBookingsModalProps) => {
  return (
    <Fragment>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader>
          <h3>Delete Booking</h3>
        </ModalHeader>
        <ModalBody>
          <h6>Are you sure you want to delete all old bookings?</h6>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete</button>
          <button type="button" onClick={onHide} className="btn btn-danger">Cancel</button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}