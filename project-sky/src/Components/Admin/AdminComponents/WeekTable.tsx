import { Fragment, useEffect, useState } from "react";
import { fetchGroupsOverviewWeek } from "../../../shared/Fetch/AdminHomeFetches";
import RoomOverview from "../../Rooms/RoomsInterfaces/RoomOverview";

const WeekOverview = (props: { weekNumber: number, scheduleId: number }) => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        RoomOverviewFetch();
    }, [props.weekNumber])

    async function RoomOverviewFetch() {
        try {
            const response: any = await fetchGroupsOverviewWeek(props.weekNumber, props.scheduleId)
            setRooms(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Fragment>
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
                    {rooms.map((room: RoomOverview) => {
                        return (
                            <tr key={room.roomName}>
                                <th className="adminHomeTableRooms" scope="row">{room.roomName}</th>
                                <td>{room.groupNames[0]}</td>
                                <td>{room.groupNames[1]}</td>
                                <td>{room.groupNames[2]}</td>
                                <td>{room.groupNames[3]}</td>
                                <td>{room.groupNames[4]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default WeekOverview;