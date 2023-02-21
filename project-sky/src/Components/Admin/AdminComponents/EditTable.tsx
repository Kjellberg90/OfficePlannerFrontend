import { group } from "console";
import { useState, useEffect, Fragment, ChangeEvent, ChangeEventHandler } from "react";
import Group from "../../Groups/Group";
import RoomOverview from "../../Rooms/RoomOverview";

const EditTable = (props: {currentDate: string}) => {
    const [rooms, setRooms] = useState<RoomOverview[]>([]);
    const [date, setDate] = useState("2023-01-09")
    const [groups, setGroups] = useState<string[]>([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        setDate(props.currentDate)
        RoomOverviewFetch();
    },[props.currentDate])

    const RoomOverviewFetch = () => {
        fetch(`https://localhost:7054/api/Room/adminOverview/` + date)
        .then(response => response.json())
        .then(res => { setRooms(res)})
    }
    
    useEffect(() => {
        RoomOverviewFetch();
    },[date])
    
    useEffect(() => {
        GroupFetch();
    },[])
    const GroupFetch = () => {
        fetch("https://localhost:7054/api/Group/GetGroups")
        .then((res) => res.json())
        .then((data) => {
            var nameList: string[] = data.map((group: Group) => {
                return group.name
            })
            setGroups(nameList);
        })
        .catch((err) => {
            setError(err);
        })
    }

    const HandleChange = (e: ChangeEvent<HTMLSelectElement>, roomIndex: number, dayIndex: number) => {
        const value = e.target.value;
        
        var newValues = rooms[roomIndex];
        newValues.groupNames.splice(dayIndex, 1, value);

        const newRooms = [...rooms];
        newRooms[roomIndex] = newValues;
        setRooms(newRooms);
    }

    
    return (
        <table className="adminTable adminHomePageTable">
            <thead>
                <tr className="adminTableHeader">
                    <th scope="col">Room</th>
                    <th scope="col">Monday</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                </tr>
            </thead>
            <tbody className="adminTableBody">
                {rooms.map((room: RoomOverview, roomIndex) => {return (
                    <tr key={roomIndex}>
                        <th className="adminHomeTableRooms" scope="row">{room.roomName}</th>                            
                        
                        {room.groupNames.map((group: string, dayIndex: number) => {
                            return(
                                <td key={dayIndex}>
                                    <select name="groupNames" value={group} onChange={(e: ChangeEvent<HTMLSelectElement>) => HandleChange(e, roomIndex, dayIndex)}>
                                        <option value={""}></option>
                                            {groups.map((groupName: string) => {
                                                return(
                                                    <option key={groupName} value={groupName}>{groupName}</option>
                                                )
                                            })}
                                    </select>
                                </td>
                            )
                        })}
                    </tr>                                
                )})}
            </tbody>
        </table>
    )
}

export default EditTable;