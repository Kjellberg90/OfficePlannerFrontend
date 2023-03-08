import { DetailedHTMLProps, Fragment, HTMLAttributes, ReactNode, RefObject, useState } from "react";
import { Modal, ModalProps } from "react-bootstrap";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";


type DeleteSingleBookingModalProps = {
  show: boolean;
  onHide: () => void;
  user: { date: string; userName: string; roomId: number };
  delete: () => void;
};

export const DeleteSingleBookingModal = ({
  show,
  onHide,
  user,
  delete: handleDelete,
}: DeleteSingleBookingModalProps) => {

  return (
  <Fragment>
      <Modal
        show={show} onHide={onHide} 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="d-flex justify-content-center dropSeatModalHeader" closeButton>
        </Modal.Header>
        <Modal.Body  className="d-flex justify-content-center dropSeatModalBody" >
          <h4>Drop Booked Seat for {user.userName}</h4>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-around dropSeatModalFooter">
          <button className="dropButton" onClick={handleDelete}>Drop Booking</button>
        </Modal.Footer>
      </Modal>
  </Fragment>
  )
}