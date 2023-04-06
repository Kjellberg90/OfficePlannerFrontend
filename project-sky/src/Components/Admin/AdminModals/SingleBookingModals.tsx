import { DetailedHTMLProps, Fragment, HTMLAttributes, ReactNode, RefObject, useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalProps } from "react-bootstrap";
import { BsPrefixProps, Omit } from "react-bootstrap/esm/helpers";
import Groups from "../../Groups/GroupInterfaces/groupsInterface";

interface AdminRoom {
  id: number;
  name: string;
  seats: number;
}

type AdminGroup = {
  id: number;
  name: string;
}

type AdminBookingProps = {
  id: number;
  date: string;
  groupName: string;
  roomName: string;
}

type AddBookingModalProps = {
  show: boolean;
  onHide: () => void;
  adminGroups: AdminGroup[];
  adminRooms: AdminRoom[];
  updatedvalue: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  onSubmit: () => void;
};

type AdminDeleteBookingModalProps = {
  show: boolean;
  onHide: () => void;
  handleDelete: () => void;
  booking?: AdminBookingProps;
}

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
  adminGroups,
  adminRooms,
  updatedvalue,
  onSubmit,
  ...props
}: AddBookingModalProps) => {
  const [groups, setGroups] = useState<AdminGroup[]>([]);
  const [rooms, setRooms] = useState<AdminRoom[]>([]);

  useEffect(() => {
    setGroups(adminGroups);
    setRooms(adminRooms);
  }, [adminGroups, adminRooms]);

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
            <input type="date" name="date" onChange={updatedvalue} />
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

export const EditBookingModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode }) => {

  const [groups, setGroups] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setGroups(props.groups)
    setRooms(props.rooms)
  }, [props.groups, props.rooms]);

  return (
    <Fragment>
      <Modal {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader>
          <h3>Update Booking</h3>
        </ModalHeader>
        <ModalBody>
          <form id="EditSingleBookingModalForm">
            <select placeholder="Select Group" name="groupId" id="groupId" onChange={props.updatedvalue}>
              {
                groups.map((group: Groups) => {
                  return <option id="groupName" key={group.id} value={group.id} >{group.name}</option>
                })
              }
            </select>
            <select placeholder="Select Room" name="roomId" id="roomId" onChange={props.updatedvalue}>
              {
                rooms.map((room: AdminRoom) => {
                  return <option key={room.id} value={room.id}>{room.name}</option>
                })
              }
            </select>
            <input type="date" name="date" onChange={props.updatedvalue} />
          </form>
        </ModalBody>
        <ModalFooter>
          <button form="EditSingleBookingModalForm" type="submit" className="btn btn-primary" onClick={() => props.onsubmit()}>Update</button>
          <button type="button" onClick={props.onHide} className="btn btn-danger">Cancel</button>

        </ModalFooter>
      </Modal>
    </Fragment>
  )
}