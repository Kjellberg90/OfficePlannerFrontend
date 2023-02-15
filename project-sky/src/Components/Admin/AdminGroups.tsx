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
    const [newValues, setNewValues] = useState<{name: string | undefined; groupSize: number | undefined; division: string | undefined}>
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

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let intValue = 0;
        if (e.target.type === "number") {
            intValue = parseInt(value, 10)
            setNewValues({
                ...newValues,
                [e.target.name]: intValue
            });
            return;
        }

         
        setNewValues({
            ...newValues,
            [e.target.name]: value
        });
    }

    useEffect(() => {
        setNewValues({
            ...newValues,
            ["name"]: currentGroup?.name,
            ["groupSize"]: currentGroup?.groupSize,
            ["division"]: currentGroup?.division
        })
    }, [currentGroup])

    const AddGroup = () => {
        
        fetch("https://localhost:7054/api/Group/AddGroup", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newValues)
        })
        .then((response) => {
            if(!response.ok) throw new Error(response.status.toString());
        })
        .catch((error) => {console.log("Error", error)}
        )
    }

    const UpdateGroup = () => {
        debugger

        if(newValues.division === undefined || newValues.division === null || newValues.division === ""){
            setNewValues({
                ...newValues,
                division: currentGroup?.division
            })
        }

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

    const DeleteGroup = async () => {
        await fetch(`https://localhost:7054/api/Group/DeleteGroup/${currentGroup?.id}`,{
            method: "DELETE"
        })
        // .then((response) => response.json())  -----------------------  FRÅGA NÄR DU ÄR TILLBAKA PÅ PLATS!!!  ----------------------------
        // .then((res) => {
        //     setShowDeleteGroup(false);
        //     setCurrentGroup({
        //         "id": 0,
        //         "name": "",
        //         "groupSize": 0,
        //         "division" : ""
        //     });
        //     console.log(res.status) 
        //     if(!res.ok) {
        //        throw new Error(res.status)
        //     }
        // })
        .then(() => FetchGroups())
        .catch((error) => {
            console.log("error", error)
        })
    }

    const GetOrderedGroups = () => {
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

        return (
            <tbody className="adminTableBody">
                {newArr.map((groups, i) => {
                    return(
                        <tr key={i}>
                            {groups.map((names, i) => {
                                return(
                                    <td key={i}>{names}</td>
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
                                    <td>{group.groupSize}</td>
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
                        {GetOrderedGroups()}
                    </table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="button" className="btn btn-primary mt-3 mb-3" onClick={() => setShowAddGroup(true)}>Add group</button>
                </Col>
            </Row>
            <AddGroupModal
                show={showAddGroup}
                onHide={() => {setShowAddGroup(false)}}
                updatedvalue={HandleChange}
                onSubmit={AddGroup}
            />
            <UpdateGroupModal 
                show={showUppdateGroup}
                onHide={() => setShowUpdateGroup(false)}
                updatedvalue={HandleChange}
                onSubmit={UpdateGroup}
                groupname={currentGroup?.name}
                groupsize={currentGroup?.groupSize}
                groupdivision={currentGroup?.division}
            />
            <DeleteGroupModal 
                show={showDeleteGroup}
                onHide={() => setShowDeleteGroup(false)}
                groupname={currentGroup?.name}
                delete={() => {DeleteGroup(); setShowDeleteGroup(false)}}
            />
        </Container>
    )
}

export default AdminGroups;