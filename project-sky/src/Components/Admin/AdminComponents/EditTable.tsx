import { useState, useEffect, Fragment, ChangeEvent, ChangeEventHandler } from "react";
import Group from "../../Groups/Group";
import RoomOverview from "../../Rooms/RoomOverview";

const EditTable = (props: {currentDate: string}) => {
    const [rooms, setRooms] = useState<RoomOverview[]>([]);
    const [groups, setGroups] = useState<string[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        RoomOverviewFetch();
        GroupFetch();
    },[])

    const RoomOverviewFetch = () => {
        fetch(`https://localhost:7054/api/Room/adminOverview/` + props.currentDate)
        .then(response => response.json())
        .then(res => { setRooms(res)})
    }
    
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

    const HandleReset = (e: ChangeEvent<HTMLFormElement>) => {
        var roomList = new Array<RoomOverview>();

        for (let i = 0; i < rooms.length; i++) {
            
            var room: RoomOverview = {
                roomName: rooms[i].roomName,
                groupNames: ["","","","",""]
            }


            roomList.push(room);            
        }
        setRooms(roomList);
    }

    
    return (
        <form id="testForm" onReset={HandleReset}>
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
        </form>
    )
}

export default EditTable;