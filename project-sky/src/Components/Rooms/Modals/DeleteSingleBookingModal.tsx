import { any } from "prop-types";
import { ChangeEvent, Fragment } from "react";
import { Modal} from "react-bootstrap";

type DeleteSingleBookingModalProps = {
  show: boolean;
  onHide: () => void;
  user: { date: string; name: string; roomId: number; password: string; };
  delete: (e: any) =>  void;
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
        <Modal.Footer className="d-flex justify-content-center dropSeatModalFooter pt-0">
          <form className="d-flex justify-content-center gap-2" onSubmit={(e) => handleDelete(e)}>
            <input className="pinInput form-control" type="password" placeholder="Password" onChange={(e) => handleChange(e)} />
            <button className="dropButton" type="submit">Drop Booking</button>
          </form>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}