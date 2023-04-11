import { Fragment} from "react"
import { Modal, ModalBody, ModalFooter, ModalHeader} from "react-bootstrap"
import { AdminAddGroupModalProps, AdminUpdateGroupModalProps, AdminDeleteGroupModalProps, AdminAddRoomModalProps, AdminUpdateRoomModalProps, AdminDeleteRoomModalProps } from "../AdminComponents/AdminModalTypes"

export const AddGroupModal = ({
    show,
    onHide,
    onSubmit,
    updatedValue,
    ...props
}: AdminAddGroupModalProps) => {
    return (
        <Fragment>
            <Modal 
            show={show}
            onHide={onHide}
            {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <h3>Add new group</h3>
                </Modal.Header>
                <Modal.Body>
                    <form id="addForm">
                        <input type="text" required placeholder="Name" name="name" onChange={updatedValue}></input>
                        <input type="number" required placeholder="Team size" name="groupSize" onChange={updatedValue}></input>
                        <select name="division" required onChange={updatedValue}>
                            <option value="A">R&D A</option>
                            <option value="B">R&D B</option>
                            <option value="C">R&D C</option>
                        </select> 
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button form="addForm" type="submit" className="btn btn-primary" onClick={onSubmit}>Add group</button>
                    <button type="button" className="btn btn-danger" onClick={onHide}>Cancel</button>
                </Modal.Footer>

            </Modal>
        </Fragment>
    )
}

export const UpdateGroupModal = ({
    show,
    onHide,
    onSubmit,
    updatedValue,
    groupName,
    groupSize,
    groupDivision,
    ...props
}: AdminUpdateGroupModalProps) => {
    return (
        <Fragment>
            <Modal
            show={show}
            onHide={onHide}
            {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>
                    <h3>Update group</h3>
                </ModalHeader>
                <ModalBody>
                    <form id="updateGroupForm">
                        <input type="text" placeholder={groupName} onChange={updatedValue} name="name"/>
                        <input type="number" placeholder={groupSize?.toString()} onChange={updatedValue} name="groupSize"/>
                        <select name="division" placeholder={groupDivision} onChange={updatedValue}>
                            <option>Choose R&D</option>
                            <option value="A">R&D A</option>
                            <option value="B">R&D B</option>
                            <option value="C">R&D C</option>
                        </select> 
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button form="updateGroupForm" type="submit" className="btn btn-primary" onClick={onSubmit}>Update group</button>
                    <button type="button" onClick={onHide} className="btn btn-danger">Cancel</button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
}

export const DeleteGroupModal = ({
    show,
    onHide,
    groupName,
    handleDelete,
    ...props
}: AdminDeleteGroupModalProps) => {
    return (
        <Fragment>
            <Modal 
            show={show}
            onHide={onHide}
            {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>
                    <h3>Delete group</h3>
                </ModalHeader>
                <ModalBody>
                    <h6>Are you sure you want to delete group</h6>
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete group</button>
                    <button type="button" onClick={onHide} className="btn btn-danger">Cancel</button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
}

export const AddRoomModal = ({
    show,
    onHide,
    onSubmit,
    updatedValue,
    ...props
}: AdminAddRoomModalProps) => {
  return (
      <Fragment>
          <Modal 
          show={show}
          onHide={onHide}
          {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <Modal.Header>
                  <h3>Add new room</h3>
              </Modal.Header>
              <Modal.Body>
                  <form id="addForm">
                      <input type="text" required placeholder="Name" name="name" onChange={updatedValue}></input>
                      <input type="number" required placeholder="Number of seats" name="seats" onChange={updatedValue}></input>
                  </form>
              </Modal.Body>
              <Modal.Footer>
                  <button form="addForm" type="submit" className="btn btn-primary" onClick={onSubmit}>Add room</button>
                  <button type="button" className="btn btn-danger" onClick={onHide}>Cancel</button>
              </Modal.Footer>

          </Modal>
      </Fragment>
  )
}

export const UpdateRoomModal = ({
    show,
    onHide,
    onSubmit,
    updatedValue,
    roomName,
    seats,
    ...props
}: AdminUpdateRoomModalProps) => {
  return (
      <Fragment>
          <Modal 
          show={show}
          onHide={onHide}
          {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <ModalHeader>
                  <h3>Update room</h3>
              </ModalHeader>
              <ModalBody>
                  <form id="updateGroupForm">
                      <input type="text" placeholder={roomName} onChange={updatedValue} name="name"/>
                      <input type="number" placeholder={seats?.toString()} onChange={updatedValue} name="seats"/>
                  </form>
              </ModalBody>
              <ModalFooter>
                  <button form="updateGroupForm" type="submit" className="btn btn-primary" onClick={onSubmit}>Update room</button>
                  <button type="button" onClick={onHide} className="btn btn-danger">Cancel</button>
              </ModalFooter>
          </Modal>
      </Fragment>
  )
}

export const DeleteRoomModal = ({
    show,
    onHide,
    room,
    handleDelete,
    ...props
}: AdminDeleteRoomModalProps) => {
  return (
      <Fragment>
          <Modal 
          show={show}
          onHide={onHide}
          {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <ModalHeader>
                  <h3>Delete room</h3>
              </ModalHeader>
              <ModalBody>
                  <h6>Are you sure you want to delete room?</h6>
              </ModalBody>
              <ModalFooter>
                  <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete room</button>
                  <button type="button" onClick={onHide} className="btn btn-danger">Cancel</button>
              </ModalFooter>
          </Modal>
      </Fragment>
  )
}