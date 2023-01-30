import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Groups from './groupsInterface'

const Group = () => {  
    
  const [groupNames, setGroups] = useState([]);
  const [error, setError] = useState([]);
      
  useEffect(() => {
    fetch(`https://localhost:7054/api/Group/GetGroups`)
          .then(response => response.json())
          .then(res => setGroups(res))
          .catch(err => setError(err))
  },[])


  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center">
        <Col  md={6}>
          <Stack gap={5}>
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