import { loadGroupData} from "../shared/fetch/testdata";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import {useState, useEffect} from 'react'
import Test from "./Test";


  const {
    jsonGroupData
  } = loadGroupData();

   const Group = () => {
     
     
    //  var x = function onClickGroupName(name: string) {
    //  var [groupName, setgroupName] = useState("")
    //  useEffect(() => {
    //    setgroupName("Daniel")
    //  }, [])
    //  console.log(groupName)   
    // function sendGroupNameAsProp(groupName: string){
    //   <Test groupName={"groupName"}/>
    // }

    var [groupName, setgroupName] = useState("")

   
    console.log("Gruppnamn: " + groupName)
    

    return (
        <Container>
           <Row className="groups">
                <Col  lg={{span: 6, offset: 3}}>
                  <Stack gap={5}>
                      {
                          jsonGroupData.map(groups => {
                            return(
                                <div className="groupNameDiv" key={groups.groupName} onClick={() => setgroupName(groups.groupName)}>
                                  <h3>{groups.groupName}</h3>
                                </div>
                            );
                          })
                      }
                  </Stack>
                </Col>
           </Row>
           </Container>
      )
}

export default Group;