import { DetailedHTMLProps, Fragment, HTMLAttributes, ReactNode, RefObject } from "react"
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalProps } from "react-bootstrap"
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers"

export const AddGroupModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode }) => {
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

export const UpdateGroupModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode }) => {
    return (
        <Fragment>
            <Modal {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>
                    <h3>Update group</h3>
                </ModalHeader>
                <ModalBody>
                    <form id="updateGroupForm">
                        <input type="text" placeholder={props.testName} onChange={props.onUpdatedValue} name="name"/>
                        <input type="text" placeholder={props.testMembers} onChange={props.onUpdatedValue} name="teamMembers"/>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button form="updateGroupForm" type="submit" className="btn btn-primary" onClick={props.onSubmit}>Update group</button>
                    <button type="button" onClick={props.onHide} className="btn btn-danger">Cancel</button>

                </ModalFooter>
            </Modal>
        </Fragment>
    )
}

export const DeleteGroupModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode }) => {
    return (
        <Fragment>
            <Modal {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>
                    <h3>Delete group</h3>
                </ModalHeader>
                <ModalBody>
                    <h6>Are you sure you want to delete group <b>{props.groupName}?</b></h6>
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-primary" onClick={props.delete}>Delete group</button>
                    <button type="button" onClick={props.onHide} className="btn btn-danger">Cancel</button>

                </ModalFooter>
            </Modal>
        </Fragment>
    )
}