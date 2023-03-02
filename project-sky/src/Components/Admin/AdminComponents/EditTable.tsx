import { useState, useEffect, ChangeEvent, SyntheticEvent } from "react";
import Group from "../../Groups/Group";
import RoomOverview from "../../Rooms/RoomOverview";
import { fetchGroupsOverview } from "../../../shared/Fetch/AdminHomeFetches";
import { fetchGroups } from "../../../shared/Fetch/AdminGroupFetches";
import { FetchPutBookings } from "../../../shared/Fetch/AdminBookingFetches";

const EditTable = (props: {currentDate: string}) => {
    const [rooms, setRooms] = useState<RoomOverview[]>([]);
    const [groups, setGroups] = useState<string[]>([]);

    useEffect(() => {
        RoomOverviewFetch();
        GroupFetch();
    },[])

    

    const RoomOverviewFetch = async () => {
        await fetchGroupsOverview(props.currentDate)
        .then((data) => {
            setRooms(data)
        })
    }

    const GroupFetch = async () => {
        await fetchGroups()
            .then((data) => {
                var nameList: string[] = data.map((group: Group) => {
                    return group.name
                })
                setGroups(nameList)
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

    const HandleSubmit = (e: SyntheticEvent) => {
        FetchPutBookings(rooms, props.currentDate)
    }

    
    return (
        <form id="testForm" onReset={HandleReset} onSubmit={HandleSubmit}>
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