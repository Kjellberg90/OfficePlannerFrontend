import { ChangeEvent, DetailedHTMLProps, Fragment, HTMLAttributes, ReactNode, RefObject, useState } from "react";
import { Modal, ModalProps } from "react-bootstrap";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";



export const DeleteSingleBookingModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) => {
  
  // const [pin, setPin] = useState([0,0,0,0]);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   var index = parseInt(e.target.id.slice(-1));
  //   const val = e.target.valueAsNumber; 
  //   const newVal = val < 10 ? val : parseInt(val.toString().substring(0,1));

  //   console.log(newVal)
    
  //   var newPin = pin;
  //   newPin[index] = newVal;
  //   setPin(newPin);
    
  // }

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
        <Modal.Footer className="d-flex justify-content-center dropSeatModalFooter">
          <form>
            <input className="pinInput" id="deletePin1" type="number" onChange={(e) => props.handlechange(e)}/>
            <input className="pinInput" id="deletePin2" type="number" onChange={(e) => props.handlechange(e)}/>
            <input className="pinInput" id="deletePin3" type="number" onChange={(e) => props.handlechange(e)}/>
            <input className="pinInput" id="deletePin4" type="number" onChange={(e) => props.handlechange(e)}/>
          </form>
          <button className="dropButton" onClick={props.delete}>Drop Booking</button>
        </Modal.Footer>
      </Modal>
  </Fragment>
  )
}