import { DetailedHTMLProps, Fragment, HTMLAttributes, ReactNode, RefObject, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalProps } from "react-bootstrap";
import { BsPrefixProps, Omit } from "react-bootstrap/esm/helpers";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

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
                  <select placeholder="Select Room" ></select>
                  <select placeholder="Select Group" ></select>
                  <input type="date" />
              </ModalBody>
              <ModalFooter>
                  <button type="button" className="btn btn-primary" onClick={props.delete}>Book</button>
                  <button type="button" onClick={props.onHide} className="btn btn-danger">Cancel</button>
              </ModalFooter>
          </Modal>
      </Fragment>
  )
}