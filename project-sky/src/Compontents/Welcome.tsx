import { loadGroupData, loadRoomData } from "../shared/fetch/testdata";

const Welcome = () => {

  const {
   jsonRoomData
  } = loadRoomData();

  const {
   jsonGroupData
  } = loadGroupData();

    return (
      <>
        <h1>Welcome</h1>
        <div className="rooms">
         {
            jsonRoomData.map(rooms => {
               return(
                  <h3>{rooms.roomName}</h3>
               );
            })
         }
         </div>
         <br></br>
         <div className="groups">
         {
            jsonGroupData.map(groups => {
               return(
                  <h3>{groups.groupName}</h3>
               );
            })
         }
         </div>
         </>
    )
}
            

export default Welcome;