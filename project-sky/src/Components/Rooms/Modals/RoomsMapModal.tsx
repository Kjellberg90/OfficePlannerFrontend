import { DetailedHTMLProps, Fragment, HTMLAttributes, ReactNode, RefObject }from "react";
import { Modal, ModalProps } from "react-bootstrap";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import Map from "../../../shared/Map/Map";
import { Row } from "react-bootstrap";
import MobileMap from "../../../shared/Map/MobileMap";

export const RoomMapModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) => {

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

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
        <Modal.Body  className="d-flex justify-content-center mapModalBody">
            <Row className="d-flex justify-content-center align-items-center modalMap">
              {isMobile ? <MobileMap style={{ height: "80vh", width: "100%" }} /> : <Map />} {}
            </Row>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}