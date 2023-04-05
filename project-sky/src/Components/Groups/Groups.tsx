import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Groups from './groupsInterface'
import IdleUser from '../../shared/IdleUser/IdleUser';
import { fetchGroups } from '../../shared/Fetch/GroupFetches';
import { useMediaQuery } from '@react-hook/media-query';


const Group = () => {  
    
  const [groupNames, setGroups] = useState([]);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const gap = isMobile ? 4 : 5;

  IdleUser(); //Sets Idle Timer
      
async function GetGroups() {
  const response: any = await fetchGroups()
  setGroups(response)
}

useEffect(() => {
  GetGroups()
}, [])

  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center">
        <Col  md={6}>
          <Stack gap={gap}>
              {
              groupNames.map((name: Groups) => {
                return(
                  <Link to='/info' state={{group: name}} key={name.id}>
                    <div className=" d-flex align-items-center justify-content-center groupNameDiv" >
                      <h3>{name.name}</h3>
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