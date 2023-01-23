import { loadGroupData} from "../shared/fetch/testdata";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { Link} from "react-router-dom";

 
  const {
    jsonGroupData
  } = loadGroupData();

  const Group = () => {  



    return (
        <Container>
           <Row>
                <Col  lg={{span: 6, offset: 3}}>
                  <Stack gap={5}>
                      {
                          jsonGroupData.map(groups => {
                            return(
                                <Link to='/info' state={{group: groups.groupName}} key={groups.groupName}>
                                  <div className=" d-flex align-items-center justify-content-center groupNameDiv" >
                                    <h3>{groups.groupName}</h3>
                                  </div>
                                </Link>
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