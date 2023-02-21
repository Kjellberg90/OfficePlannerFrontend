import { format } from "date-fns";
import { Fragment, useEffect, useState } from "react";
import Group from "../../Groups/Group";
import RoomOverview from "../../Rooms/RoomOverview";

const WeekOverview = (props: {inputDate: string}) => {
    const [rooms, setRooms] = useState([]);
    const [date, setDate] = useState("2023-01-09")
    
    
    useEffect(() => {
        setDate(props.inputDate)
        RoomOverviewFetch();
    },[props.inputDate])
    
    const RoomOverviewFetch = () => {
        fetch(`https://localhost:7054/api/Room/adminOverview/` + date)
        .then(response => response.json())
        .then(res => { setRooms(res)})
    }
    
    useEffect(() => {
        RoomOverviewFetch();
    },[date])
    
    const [groups, setGroups] = useState<string[]>([]);
    const [error, setError] = useState("");
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
            console.log(nameList);
            setGroups(nameList);
        })
        .catch((err) => {
            setError(err);
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