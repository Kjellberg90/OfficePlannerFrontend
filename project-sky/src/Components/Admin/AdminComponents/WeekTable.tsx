import { Fragment, useEffect, useState } from "react";
import { fetchGroupsOverview } from "../../../shared/Fetch/AdminHomeFetches";
import { fetchGroups } from "../../../shared/Fetch/GroupFetches";
import Group from "../../Groups/Group";
import RoomOverview from "../../Rooms/RoomOverview";

const WeekOverview = (props: {inputDate: string}) => {
    const [rooms, setRooms] = useState([]);
    const [groups, setGroups] = useState<string[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        RoomOverviewFetch();
        GroupFetch();
    },[props.inputDate])
    

    async function RoomOverviewFetch() {
      const response: any = await fetchGroupsOverview(props.inputDate)
      setRooms(response)
    }

  useEffect(() => {
      RoomOverviewFetch();
  },[])

    const GroupFetch = async () => {
        await fetchGroups()
        .then((data) => {
            var nameList: string[] = data.map((group: Group) => {
                return group.name
            })
            setGroups(nameList);
        })
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
                    {rooms.map((room: RoomOverview) => { return (
                        <tr key={room.roomName}>
                            <th className="adminHomeTableRooms" scope="row">{room.roomName}</th>
                            <td>{room.groupNames[0]}</td>
                            <td>{room.groupNames[1]}</td>
                            <td>{room.groupNames[2]}</td>
                            <td>{room.groupNames[3]}</td>
                            <td>{room.groupNames[4]}</td>
                        </tr>                                
                    )})}
                </tbody>
            </table>
        </Fragment>
    )
}

export default WeekOverview;