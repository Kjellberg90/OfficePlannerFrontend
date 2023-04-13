import { useState, useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { UserContext, User } from "../../shared/Context/UserContext";
import { fetchLogin } from "../../shared/Fetch/LoginFetch";
import axios from "axios";

const LoginPage = () => {
  
  var {user, setUser } = useContext(UserContext)

  const [error, setError] = useState<string | undefined>("");

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
   
    try {
      var result = await fetchLogin(data);

      if (result.status == 200) {
        setUser!(result.data.user);
        sessionStorage.setItem("role", result.data.user.role);
        CreateLoginToken(result.data);
        result.data.user.role === "Admin" ? navigate('/admin/home') : navigate('/start')
      }
    }
    catch (err) {
      if (axios.isAxiosError(err)){
        console.log(err);
        setError(err.message);
      } else {
        console.log(err);
      }      
    }
  }
  
  var CreateLoginToken = (data: any) => {
    const token = data.token;
    const expires = new Date(Date.now() + 86400 * 1000).toUTCString();
    document.cookie =  `token=${token};expires=${expires + 86400}`
  }
 
  return (
    <Container>
      <Row>
        <Col className="text-center" md={6} >
          <div className="d-flex flex-column room-info-col p-3 pb-4 loginRow">
            <h2>Log In</h2>
            <form id="loginform" className="form-inline formlogin" onSubmit={(e) => login(e)}>
              <input className="form-control m-1" type="text" name="name" id="name" placeholder="Username" onChange={handleChange} value={formData.name} required/> 
              <br/>
              <input className="form-control m-1" type="password" onChange={handleChange} placeholder="Password" name="password" id="password" value={formData.password} required/>
              <br/>
            </form>
              <input form="loginform" className="primaryButton loginbutton" type="submit" id="submit" ></input>
            <div>
              {error !== "" ? <p className="text-danger m-0">Username and/or password incorrect</p> : <></>}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage