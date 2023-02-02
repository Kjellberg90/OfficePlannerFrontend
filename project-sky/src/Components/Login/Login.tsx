import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  
  const navigate= useNavigate();

  const login = () => {
    localStorage.setItem('user', 'true')
    navigate('/admin')
  } 

  return (
    <Row className='d-flex justify-content-center'>
      <Col  md={6}>
        <Row className='d-flex justify-content-center'>
          <div className="d-flex align-items-center justify-content-center">
            <button type="button" className="btn btn-primary" onClick={() => login()}>Logga In</button>
          </div>
        </Row>
      </Col>
    </Row>
  )
}

export default LoginPage