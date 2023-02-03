import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  
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
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('user', formData.name)
    localStorage.setItem('password', formData.password)
    navigate('/admin')
  } 

  return (
    <Row className='d-flex justify-content-center'>
      <Col  md={6}>
        <Row className='d-flex justify-content-center'>
          <form onSubmit={(e) => login(e)}>
            <label>User: </label>
            <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} required/>
            <br/>
            <label>Password: </label>
            <input type="password" onChange={handleChange} name="password" id="password" value={formData.password} required/>
            <br/>
            <input type="submit" id="submit" ></input>
          </form>
        </Row>
      </Col>
    </Row>
  )
}

export default LoginPage