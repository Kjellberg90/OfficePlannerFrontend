import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Startpage = () => {
    return (
      <Container>
            <Stack gap={5}>
                <Row >
                  <Col lg={{span: 6, offset: 3}}>
                    <a href="/groups">
                      <div className="selectionBox">
                            <h2 className="boxTextStartPage">Groups</h2>
                      </div>
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col lg={{span: 6, offset: 3}}>
                    <a href="/rooms">
                      <div className="selectionBox">
                        <h3 className="boxTextStartPage">Rooms</h3>
                      </div>
                    </a>
                  </Col>
                </Row>
            </Stack>
      </Container>
    )
}

export default Startpage;