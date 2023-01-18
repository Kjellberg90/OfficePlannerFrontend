import { loadRoomData} from "../shared/fetch/testdata";
import { useState } from "react"

const {
    jsonRoomData
} = loadRoomData(); 


function GroupHasBooking() {
    let fakeProp = "DQT 6"

}


const GroupInfoPage = () => {
GroupHasBooking();
    return (
        <>
         <div className="info">
        {
            jsonRoomData.map(info => info.bookedBy == "DQT 6" && (
                <h1>
                    Team: {info.bookedBy} <br />
                    Room: {info.roomName} <br/>
                    Seatings: {info.seating} <br/>
                    {info.startTime} - {info.endTime}
                </h1>
            )
               
            )}
        </div>
            </>     
      )
}

export default GroupInfoPage;