import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Group from "../Groups/Group";
import { AddGroupModal, UpdateGroupModal, DeleteGroupModal } from "./AdminModals";


const AdminGroups = () => {
    const [groups, setGroups] = useState<Group[]>([]);
    const [error, setError] = useState();
    const [currentGroup, setCurrentGroup] = useState<Group>();
    const [newValues, setNewValues] = useState<{name: string | undefined; teamMembers: number | undefined}>
        ({name: "", 
        teamMembers: 0});
    const [newGroup, setNewGroup] = useState<{name: string | undefined; groupSize: number; division: string | undefined}>
        ({name: "", 
        groupSize: 0,
        division: ""});
    const [showAddGroup, setShowAddGroup] = useState(false);
    const [showUppdateGroup, setShowUpdateGroup] = useState(false);
    const [showDeleteGroup, setShowDeleteGroup] = useState(false);
        
    const FetchGroups = () => {
        fetch("https://localhost:7054/api/Group/GetGroups")
        .then(res => res.json())
        .then(res => {
            setGroups(res);
        })
        .catch(error => setError(error))
    }
    
    useEffect(() => {
        FetchGroups()
    }, [])

    const HandleChange = (e: any) => {
        const value = e.target.value;
        setNewValues({
            ...newValues,
            [e.target.name]: value
        });
    }

    const HandleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let intValue = 0;
        if (e.target.type === "number") {
            debugger
            intValue = parseInt(value, 10)
            setNewGroup({
                ...newGroup,
                [e.target.name]: intValue
            });
            return;
        }

         
        setNewGroup({
            ...newGroup,
            [e.target.name]: value
        });
        console.log(newGroup);
    }

    useEffect(() => {
        setNewValues({
            ...newValues,
            ["name"]: currentGroup?.name,
            ["teamMembers"]: currentGroup?.teamMembers 
        })
    }, [currentGroup])

    const AddGroup = () => {
        debugger
        console.log(newGroup)
        
        fetch("https://localhost:7054/api/Group/AddGroup", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newGroup)
        })
        .then((response) => {
            if(!response.ok) throw new Error(response.status.toString());
        })
        .catch((error) => {console.log("Error", error)}
        )
    }

    const UpdateGroup = () => {
        fetch(`https://localhost:7054/api/Group/UpdateGroup/${currentGroup?.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newValues)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((err) => {
            setError(err);
            console.log("Error:", error);
        })
    }

    const DeleteGroup = () => {
        fetch(`https://localhost:7054/api/Group/DeleteGroup/${currentGroup?.id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((res) => { 
            if(!res.ok) {
               throw new Error(res.status)
            }
            setCurrentGroup({
                "id": 0,
                "name": "",
                "teamMembers": 0,
                "division" : ""
            });
            setShowDeleteGroup(false)
        })
        .catch((error) => {
            console.log("error", error)
        })
    }

    const TestFunc = () => {
        console.log(groups)

        var divisionA: string[] = []
        var divisionB: string[] = []
        var divisionC: string[] = []

        var arr: Array<string[]> = [divisionA, divisionB, divisionC];
        var newArr: Array<string[]> = [];

        groups.map((group: Group) => {
            switch(group.division){
                case "A":
                    divisionA.push(group.name)
                    break;
                case "B":
                    divisionB.push(group.name)
                    break;
                case "C":
                    divisionC.push(group.name)
                    break;
                default:
                    break;
            }
        })

        var str: number = Math.max(...arr.map(x => x.length));

        arr.map((group: string[]) => {
            if(group.length < 4) {
                group.push("");
            }
        })

        for(let i = 0; i < str; i++) {
            newArr.push([divisionA[i], divisionB[i], divisionC[i]])
        }

        console.log(newArr)

        return (
            <tbody className="adminTableBody">
                {newArr.map((groups) => {
                    return(
                        <tr>
                            {groups.map((names) => {
                                return(
                                    <td>{names}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        )
    }
    
    
    return (
        <Container>
            <Row className="mb-3">
                <Col className="d-flex justify-content-between">
                    <h3 className="headerSecondaryColor">Groups</h3>
                </Col>
                <Col>
                <h3 className="headerSecondaryColor">R&D teams</h3>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-12 col-lg-6">
                    <table className="adminTable adminGroupsTable">
                        <thead>
                            <tr className="adminTableHeader">
                                <th className="groupTableId">Id</th>
                                <th className="groupTableName">Name</th>
                                <th className="groupTableMembers">Team Members</th>
                                <th className="groupTableActions">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="adminTableBody">
                            {groups.map((group: Group) => { 
                                return(
                                <tr key={group.name}>
                                    <td>{group.id}</td>
                                    <td>{group.name}</td>
                                    <td>{group.teamMembers}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => {
                                            setCurrentGroup(group); 
                                            setShowUpdateGroup(true);
                                        }}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                        <button className="btn btn-danger" onClick={() => {
                                            setCurrentGroup(group);
                                            setShowDeleteGroup(true);
                                        }}><FontAwesomeIcon icon={faTrash} /></button>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </Col>
                <Col className="col-lg-6 col-md-12 col-md-p-1 divisionDiv">
                    <table className="adminTable">
                        <thead>
                            <tr className="adminTableHeader text-center">
                                <th scope="col" className="col-2">R&D A - Petra</th>
                                <th scope="col" className="col-2">R&D B - Johan</th>
                                <th scope="col" className="col-2">R&D C - Andreas</th>
                            </tr>   
                        </thead>
                        {TestFunc()}
                    </table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="button" className="btn btn-primary" onClick={() => setShowAddGroup(true)}>Add group</button>
                </Col>
            </Row>
            <AddGroupModal
                show={showAddGroup}
                onHide={() => {setShowAddGroup(false)}}
                onUpdatedValue={HandleInput}
                onSubmit={AddGroup}
            />
            <UpdateGroupModal 
                show={showUppdateGroup}
                onHide={() => setShowUpdateGroup(false)}
                onUpdatedValue={HandleChange}
                onSubmit={UpdateGroup}
                testName={currentGroup?.name}
                testMembers={currentGroup?.teamMembers}
            />
            <DeleteGroupModal 
                show={showDeleteGroup}
                onHide={() => setShowDeleteGroup(false)}
                groupName={currentGroup?.name}
                delete={() => DeleteGroup()}
            />
        </Container>
    )
}

export default AdminGroups;