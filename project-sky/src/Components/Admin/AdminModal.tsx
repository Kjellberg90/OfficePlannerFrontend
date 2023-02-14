import { DetailedHTMLProps, Fragment, HTMLAttributes, ReactNode, RefObject } from "react"
import { Modal, ModalProps } from "react-bootstrap"
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers"

export const AdminModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode }) => {
    return (
        <Fragment>
            <Modal {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <h3>Add new group</h3>
                </Modal.Header>
                <Modal.Body>
                    <form id="addForm">
                        <input type="text" placeholder="Name" name="name" onChange={props.onUpdatedValue}></input>
                        <input type="number" placeholder="Team size" name="groupSize" onChange={props.onUpdatedValue}></input>
                        <input type="text" placeholder="R&D" name="division" onChange={props.onUpdatedValue}></input> 
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button form="addForm" type="submit" className="btn btn-primary" onSubmit={props.AddGroup}>Add group</button>
                    <button type="button" className="btn btn-primary" onClick={props.onHide}>Cancel</button>
                </Modal.Footer>

            </Modal>
        </Fragment>
    )
}