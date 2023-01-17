import { loadRoomData} from "../shared/fetch/testdata";

const {
    jsonRoomData
   } = loadRoomData(); 

const Rooms = () => {
    return (
        <>
         <h1>Rooms</h1>
           <div className="groups">
           {
              jsonRoomData.map(rooms => {
                 return(
                    <h3>{rooms.roomName}</h3>
                 );
              })
           }
           </div>
           </>
      )
}

export default Rooms;