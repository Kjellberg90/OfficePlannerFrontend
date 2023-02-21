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
                        <input type="text" required placeholder="Name" name="name" onChange={props.updatedvalue}></input>
                        <input type="number" required placeholder="Team size" name="groupSize" onChange={props.updatedvalue}></input>
                        <select name="division" required onChange={props.updatedvalue}>
                            <option value="A">R&D A</option>
                            <option value="B">R&D B</option>
                            <option value="C">R&D C</option>
                        </select> 
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button form="addForm" type="submit" className="btn btn-primary" onClick={props.onsubmit}>Add group</button>
                    <button type="button" className="btn btn-danger" onClick={props.onHide}>Cancel</button>
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
                        <input type="text" placeholder={props.groupname} onChange={props.updatedvalue} name="name"/>
                        <input type="number" placeholder={props.groupsize} onChange={props.updatedvalue} name="groupSize"/>
                        <select name="division" placeholder={props.groupdivision} onChange={props.updatedvalue}>
                            <option>Choose R&D</option>
                            <option value="A">R&D A</option>
                            <option value="B">R&D B</option>
                            <option value="C">R&D C</option>
                        </select> 
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button form="updateGroupForm" type="submit" className="btn btn-primary" onClick={props.onsubmit}>Update group</button>
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

export const AddRoomModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode }) => {
  return (
      <Fragment>
          <Modal {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <Modal.Header>
                  <h3>Add new room</h3>
              </Modal.Header>
              <Modal.Body>
                  <form id="addForm">
                      <input type="text" required placeholder="Name" name="name" onChange={props.updatedvalue}></input>
                      <input type="number" required placeholder="Number of seats" name="seats" onChange={props.updatedvalue}></input>
                  </form>
              </Modal.Body>
              <Modal.Footer>
                  <button form="addForm" type="submit" className="btn btn-primary" onClick={props.onsubmit}>Add room</button>
                  <button type="button" className="btn btn-danger" onClick={props.onHide}>Cancel</button>
              </Modal.Footer>

          </Modal>
      </Fragment>
  )
}

export const UpdateRoomModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode }) => {
  return (
      <Fragment>
          <Modal {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <ModalHeader>
                  <h3>Update room</h3>
              </ModalHeader>
              <ModalBody>
                  <form id="updateGroupForm">
                      <input type="text" placeholder={props.roomname} onChange={props.updatedvalue} name="name"/>
                      <input type="number" placeholder={props.seats} onChange={props.updatedvalue} name="seats"/>
                  </form>
              </ModalBody>
              <ModalFooter>
                  <button form="updateGroupForm" type="submit" className="btn btn-primary" onClick={props.onsubmit}>Update room</button>
                  <button type="button" onClick={props.onHide} className="btn btn-danger">Cancel</button>

              </ModalFooter>
          </Modal>
      </Fragment>
  )
}

export const DeleteRoomModal = (props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode }) => {
  return (
      <Fragment>
          <Modal {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <ModalHeader>
                  <h3>Delete room</h3>
              </ModalHeader>
              <ModalBody>
                  <h6>Are you sure you want to delete room <b>{props.roomname}?</b></h6>
              </ModalBody>
              <ModalFooter>
                  <button type="button" className="btn btn-primary" onClick={props.delete}>Delete room</button>
                  <button type="button" onClick={props.onHide} className="btn btn-danger">Cancel</button>
              </ModalFooter>
          </Modal>
      </Fragment>
  )
}