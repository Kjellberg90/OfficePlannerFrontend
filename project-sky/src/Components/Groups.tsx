import { loadGroupData} from "../shared/fetch/testdata";

const {
    jsonGroupData
   } = loadGroupData();

const Group = () => {
    return (
        <>
         <h1>Groups</h1>
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

export default Group;