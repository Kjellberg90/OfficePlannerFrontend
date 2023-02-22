import { DetailedHTMLProps, Fragment, HTMLAttributes, ReactNode, RefObject }from "react";
import { Modal, ModalProps } from "react-bootstrap";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import Map from "../../../shared/Map/Map";
import { Col, Row } from "react-bootstrap";


export const RoomMapModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) => {


  return (
  <Fragment>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="d-flex justify-content-center dropSeatModalHeader" closeButton>
        </Modal.Header>
        <Modal.Body  className="d-flex justify-content-center mapModalBody">
            <Col className="modalMap">
          <Map />
            </Col>
        </Modal.Body>
      </Modal>
  </Fragment>
  )
}