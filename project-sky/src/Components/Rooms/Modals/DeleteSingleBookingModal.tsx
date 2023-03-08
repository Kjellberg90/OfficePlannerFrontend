import { ChangeEvent, DetailedHTMLProps, Fragment, HTMLAttributes, ReactNode, RefObject, useState } from "react";
import { Modal, ModalProps } from "react-bootstrap";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";


type DeleteSingleBookingModalProps = {
  show: boolean;
  onHide: () => void;
  user: { date: string; userName: string; roomId: number; pinNumbers: number[];};
  delete: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const DeleteSingleBookingModal = ({
  show,
  onHide,
  user,
  delete: handleDelete,
  handleChange,
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
        <form>
            <input className="pinInput" id="deletePin1" type="number" onChange={(e) => handleChange(e)}/>
            <input className="pinInput" id="deletePin2" type="number" onChange={(e) => handleChange(e)}/>
            <input className="pinInput" id="deletePin3" type="number" onChange={(e) => handleChange(e)}/>
            <input className="pinInput" id="deletePin4" type="number" onChange={(e) => handleChange(e)}/>
          </form>
          <button className="dropButton" onClick={handleDelete}>Drop Booking</button>
        </Modal.Footer>
      </Modal>
  </Fragment>
  )
}