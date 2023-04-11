import { Fragment } from "react";
import { Modal} from "react-bootstrap";
import { DeleteSingleBookingModalProps } from "./ModalProps";


export const DeleteSingleBookingModal = ({
  show,
  onHide,
  user,
  delete: handleDelete,
  handleChange,
  errorMessage,
}: DeleteSingleBookingModalProps) => {

  return (
    <Fragment>
      <Modal
        show={show} 
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="d-flex justify-content-center dropSeatModalHeader" closeButton>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center dropSeatModalBody" >
          <h4>Drop Booked Seat for {user.name}</h4>
        </Modal.Body>
        <Modal.Footer className="dropSeatModalFooter d-flex justify-content-center flex-column">
          <div className="d-flex justify-content-center pt-0 flex-column">
            <form id="deleteSingleSeatForm" className="d-flex justify-content-center gap-2" onSubmit={(e) => handleDelete(e)}>
              <input className="pinInput form-control" type="password" placeholder="Password" onChange={(e) => handleChange(e)} />
            </form>
            <button form="deleteSingleSeatForm" className="dropButton mt-2" type="submit">Drop Booking</button>
          </div>
          <div className="text-alignt-center">
            <span className="errorMessage text-danger">{errorMessage}</span>
          </div>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}