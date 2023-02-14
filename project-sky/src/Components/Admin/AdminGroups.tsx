import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Group from "../Groups/Group";
import Popup from "./Popup";


const AdminGroups = () => {
    const [groups, setGroups] = useState<Group[]>([]);
    const [error, setError] = useState();
    const [currentGroup, setCurrentGroup] = useState<Group>();
    const [openEditPopup, setOpenEditPopup] = useState(false);
    const [openDeletePopup, setOpenDeletePopup] = useState(false);
    const [newValues, setNewValues] = useState<{name: string | undefined; teamMembers: number | undefined}>
        ({name: "", 
        teamMembers: 0});
        
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

    useEffect(() => {
        setNewValues({
            ...newValues,
            ["name"]: currentGroup?.name,
            ["teamMembers"]: currentGroup?.teamMembers 
        })
    }, [currentGroup])

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

    const DeleteGroup = async () => {
        await fetch(`https://localhost:7054/api/Group/DeleteGroup/${currentGroup?.id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
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
        })
        .then(() => setOpenDeletePopup(false))
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
                <Col>
                    <h3 className="headerSecondaryColor">Groups</h3>
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
                                            setOpenEditPopup(true);
                                        }}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                        <button className="btn btn-danger" onClick={() => {
                                            setCurrentGroup(group);
                                            setOpenDeletePopup(true);
                                        }}><FontAwesomeIcon icon={faTrash} /></button>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                    <Popup trigger={openEditPopup}>
                        <h4>Group Id: {currentGroup?.id}</h4>
                        <form onSubmit={() => (UpdateGroup())}>
                            <input type="text" placeholder={currentGroup?.name} onChange={HandleChange} name="name"/>
                            <input type="text" placeholder={currentGroup?.teamMembers.toString()} onChange={HandleChange} name="teamMembers"/>
                            <input type="submit" value="Update" />
                            <button type="button" onClick={() => {setOpenEditPopup(false)}}>Cancel</button>
                        </form>
                    </Popup>
                    <Popup trigger={openDeletePopup}>
                        <h4>Are you sure you want to Delete group {currentGroup?.name}?</h4>
                        <button onClick={() => {DeleteGroup(); setOpenDeletePopup(false);}}>Confirm</button>
                        <button onClick={() => setOpenDeletePopup(false)}>Cancel</button>
                    </Popup>
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
        </Container>
    )
}

export default AdminGroups;