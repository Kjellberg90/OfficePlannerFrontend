import { loadRoomData} from "../shared/fetch/testdata";
import { useState, useEffect} from "react"

const {
    jsonRoomData
} = loadRoomData(); 

let fakeProp = "DQT 6"

// Props: any för tillfället eftersom den inte gillade att jag körde med props: string, kanske för att jag har min fakeprop utanför?
function CheckIfBookingExist(props: any) {
   
const [check, setCheck] = useState<boolean>()
let response = false;

 useEffect(() => {
     setCheck(response);
    },[response])

        jsonRoomData.map(info => {
        if(info.bookedBy === fakeProp)
        {
           response = true;
        }
    })

    
if (check == true) {
    return <GroupDetails />
}
     return <h1>No bookings could be found</h1>
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
         <CheckIfBookingExist /> 
      )
}

export default GroupInfoPage;