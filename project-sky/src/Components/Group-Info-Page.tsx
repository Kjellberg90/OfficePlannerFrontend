import { loadRoomData} from "../shared/fetch/testdata";
import { useState } from "react"
import { info } from "console";
import Group from "./Groups";

const {
    jsonRoomData
} = loadRoomData(); 

let fakeProp = "DQT 6"

function CheckIfBookingExist() {
    const [check, setCheck] = useState<boolean>(false)
   
    var listBookings = jsonRoomData.map(info => info.bookedBy)
   
        JSON.stringify(listBookings, (key, value )=>{
         if(value.contains = fakeProp)
         {
            
            return <GroupDetails />
            setCheck(true);
         }

         return <h1>No bookings could be found</h1>
    }); 
}

function GroupDetails() {
    return (
        <div>
        {
            jsonRoomData.map(info => info.bookedBy == fakeProp && (
            <h1>
            Team: {info.bookedBy} <br />
            Room: {info.roomName} <br/>
            Seatings: {info.seating} <br/>
            {info.startTime} - {info.endTime}
            </h1>
        ))
        }      
        </div>
    )
}


const GroupInfoPage = () => {

    return (
        <>
         <GroupDetails />
        </>     
      )
}

export default GroupInfoPage;