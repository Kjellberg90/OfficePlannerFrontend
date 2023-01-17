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
        <br />
        <h3>Rooms</h3>
        <div className="rooms">
         {
            jsonRoomData.map(rooms => {
               return(
                  <h3>{rooms.roomName}</h3>
               );
            })
         }
         </div>
         <br />
         <h3>Groups</h3>
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