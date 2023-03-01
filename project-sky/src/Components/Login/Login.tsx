import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { fetchLogin } from "../../shared/Fetch/LoginFetch";

const LoginPage = () => {
  
  const [formData, setformData] = useState({
    name: '',
    password: ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setformData({
      ...formData,
      [name]: value,
    })
  }
  
  const navigate= useNavigate();

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data ={ "userName": formData.name, "password": formData.password}

      await fetchLogin(data)
      .then(() => navigate('/admin/home'))
  }

 
  return (
    <Container>
      <Row className='d-flex align-items-center justify-content-center'>
        <Col className="text-center" md={6}>
          <div className="d-flex align-items-center justify-content-center flex-column room-info-col pt-2 pb-2">
          <h2>Log In</h2>
            <form className="form-inline" onSubmit={(e) => login(e)}>
              <input className="form-control" type="text" name="name" id="name" placeholder="Username" onChange={handleChange} value={formData.name} required/>
              <br/>
              <input className="form-control" type="password" onChange={handleChange} placeholder="Password"  name="password" id="password" value={formData.password} required/>
              <br/>
              <input className="primaryButton roomsPageSubmitButton" type="submit" id="submit" ></input>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage