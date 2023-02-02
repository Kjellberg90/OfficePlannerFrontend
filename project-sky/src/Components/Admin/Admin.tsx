import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const AdminPage = () => {
  
  const navigate= useNavigate();

  const login = () => {
    localStorage.clear()
    navigate('/')
  } 

  return (
    <Row className='d-flex justify-content-center'>
      <Col  md={6}>
        <Row className='d-flex justify-content-center'>
          <div className="d-flex align-items-center justify-content-center">
            <button type="button" className="btn btn-danger" onClick={() => login()}>Logga Ut</button>
          </div>
        </Row>
      </Col>
    </Row>
  )
}

export default AdminPage