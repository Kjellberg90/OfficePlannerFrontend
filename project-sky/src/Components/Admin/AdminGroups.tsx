import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Group from "../Groups/Group";


const AdminGroups = () => {
    const [groups, setGroups] = useState([]);
    const [error, setError] = useState();
    
    const FetchGroups = () => {
        fetch("https://localhost:7054/api/Group/GetGroups")
        .then(res => res.json())
        .then(res => {setGroups(res);
        console.log(res)})
        .catch(error => setError(error))
    }
    
    useEffect(() => {
        FetchGroups()
    }, [])
    
    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h3 className="headerSecondaryColor">Groups</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <table className="adminTable adminGroupsTable">
                        <thead>
                            <tr className="adminTableHeader">
                                <th scope="col" className="groupTableId">Id</th>
                                <th scope="col" className="groupTableName">Name</th>
                                <th scope="col" className="groupTableMembers">Team Members</th>
                                <th scope="col" className="groupTableActions">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="adminTableBody">
                            {groups.map((group: Group) => { return(
                                <tr key={group.name}>
                                    <td>{group.id}</td>
                                    <td>{group.name}</td>
                                    <td>{group.teamMembers}</td>
                                    <td>
                                        <button className="btn btn-primary"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                        <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminGroups;