import { DetailedHTMLProps, Fragment, HTMLAttributes, ReactNode, RefObject, useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalProps } from "react-bootstrap";
import { BsPrefixProps, Omit } from "react-bootstrap/esm/helpers";
import Groups from "../../Groups/groupsInterface";
import Room from "../../Rooms/Room";

interface AdminRoom {
  id: number;
  name: string;
  seats: number;
}

export const DeleteBookingModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode }) => {
  return (
      <Fragment>
          <Modal {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <ModalHeader>
                  <h3>Delete Booking</h3>
              </ModalHeader>
              <ModalBody>
                  <h6>Are you sure you want to delete booking<b>{props.roomname}?</b></h6>
              </ModalBody>
              <ModalFooter>
                  <button type="button" className="btn btn-primary" onClick={props.delete}>Delete</button>
                  <button type="button" onClick={props.onHide} className="btn btn-danger">Cancel</button>
              </ModalFooter>
          </Modal>
      </Fragment>
  )
}

export const AddBookingModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) => {
  

  const [groups, setGroups] = useState([]);
  const [rooms, setRooms] = useState([]);
  

  useEffect(() => {
    setGroups(props.groups)
    setRooms(props.rooms)
    console.log("Groups: ", groups)
    console.log("Rooms: ", rooms)
  })

  return (
      <Fragment>
          <Modal {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <ModalHeader>
                  <h3>Add Booking</h3>
              </ModalHeader>
              <ModalBody>
                <form id="addSingleBookingModalForm">
                  <select placeholder="Select Group" >
                    {
                      groups.map((group: Groups) => {
                        return <option key={group.id}>{group.name}</option>
                      })
                    }
                  </select>
                  <select placeholder="Select Room" >
                  {
                      rooms.map((room: AdminRoom) => {
                        return <option key={room.id}>{room.name}</option>
                      })
                    }
                    </select>
                  <input type="date" />
                </form>
              </ModalBody>
              <ModalFooter>
                <button form="addSingleBookingModalForm" type="submit" className="btn btn-primary" onClick={() => props.onsubmit(booking)}>Book</button>
                <button type="button" onClick={props.onHide} className="btn btn-danger">Cancel</button>
              </ModalFooter>
          </Modal>
      </Fragment>
  )
}