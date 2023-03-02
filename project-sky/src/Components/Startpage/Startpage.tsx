import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Startpage = () => {
    return (
      <Container>
            <Stack gap={5}>
                <Row className='d-flex justify-content-center'>
                  <Col  md={6}>
                    <Link to="/groups">
                      <div className="d-flex align-items-center justify-content-center selectionBox">
                            <h2 className="boxTextStartPage">Teams</h2>
                      </div>
                    </Link>
                  </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                  <Col md={6}>
                    <Link to="/rooms">
                      <div className="d-flex align-items-center justify-content-center selectionBox ">
                        <h2 className="boxTextStartPage ">Rooms</h2>
                      </div>
                    </Link>
                    
                  </Col>
                </Row>
            </Stack>
      </Container>
    )
}

export default Startpage;