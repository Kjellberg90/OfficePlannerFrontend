import { useState, useEffect, useCallback, ChangeEvent } from "react";
import Group from "../../Groups/GroupInterfaces/Group";
import RoomOverview from "../../Rooms/RoomOverview";
import { fetchGroupsOverviewWeek } from "../../../shared/Fetch/AdminHomeFetches";
import { fetchGroups } from "../../../shared/Fetch/AdminGroupFetches";
import { FetchPutBookings } from "../../../shared/Fetch/AdminBookingFetches";

const EditTable = (props: { weekNumber: number; scheduleId: number }) => {
    const [rooms, setRooms] = useState<RoomOverview[]>([]);
    const [groups, setGroups] = useState<string[]>([]);

    const RoomOverviewFetch = useCallback(async () => {
        const data = await fetchGroupsOverviewWeek(props.weekNumber, props.scheduleId);
        setRooms(data);
    }, [props.weekNumber, props.scheduleId]);

    const GroupFetch = useCallback(async () => {
        try {
            const data = await fetchGroups();
            const nameList: string[] = data.map((group: Group) => group.name);
            setGroups(nameList);
        } catch (error) {
            console.error(error);
        }
    }, [setGroups]);

    useEffect(() => {
        RoomOverviewFetch();
        GroupFetch();
    }, [RoomOverviewFetch, GroupFetch])


    const handleChange = (e: ChangeEvent<HTMLSelectElement>, roomIndex: number, dayIndex: number) => {
        const value = e.target.value;

        var newValues = rooms[roomIndex];
        newValues.groupNames.splice(dayIndex, 1, value);

        const newRooms = [...rooms];
        newRooms[roomIndex] = newValues;
        setRooms(newRooms);
    }

    const handleReset = (e: ChangeEvent<HTMLFormElement>) => {
        var roomList = new Array<RoomOverview>();

        for (let i = 0; i < rooms.length; i++) {

            var room: RoomOverview = {
                roomName: rooms[i].roomName,
                groupNames: ["", "", "", "", ""]
            }
            roomList.push(room);
        }
        setRooms(roomList);
    }

    async function handleSubmit() {
        try {
            const res = await FetchPutBookings(rooms, props.weekNumber);
            console.log("response:", res);
            //   debugger;
        } catch (err) {
            console.log("error:", err);
        }
    }

    return (
        <form id="editForm" onReset={handleReset} onSubmit={handleSubmit}>
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
                    {rooms.map((room: RoomOverview, roomIndex) => {
                        return (
                            <tr key={roomIndex}>
                                <th className="adminHomeTableRooms" scope="row">{room.roomName}</th>

                                {room.groupNames.map((group: string, dayIndex: number) => {
                                    return (
                                        <td key={dayIndex}>
                                            <select name="groupNames" value={group} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e, roomIndex, dayIndex)}>
                                                <option value={""}></option>
                                                {groups.map((groupName: string) => {
                                                    return (
                                                        <option key={groupName} value={groupName}>{groupName}</option>
                                                    )
                                                })}
                                            </select>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </form>
    )
}

export default EditTable;