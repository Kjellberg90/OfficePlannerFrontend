import { DetailedHTMLProps, Fragment, HTMLAttributes, ReactNode, RefObject } from "react";
import { Modal, ModalProps } from "react-bootstrap";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";



export const DeleteSingleBookingModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) => {


  return (
  <Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="d-flex justify-content-center dropSeatModalHeader" closeButton>
        </Modal.Header>
        <Modal.Body  className="d-flex justify-content-center dropSeatModalBody" >
          <h4>Drop Booked Seat for {props.user.userName}</h4>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-around dropSeatModalFooter">
          <button className="dropButton" onClick={props.onDelete}>Drop Booking</button>
        </Modal.Footer>
      </Modal>
  </Fragment>
  )
}