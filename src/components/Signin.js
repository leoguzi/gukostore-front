import styled from "styled-components";
import { Link } from "react-router-dom"; //useHistory
import { useState } from "react"; //useContext
//import axios from "axios";
//import UserContext from "../contexts/UserContext.js";

export default function Signup() {
  //const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  //const { setUserData } = useContext(UserContext);

  function toLogin(event) {
    event.preventDefault();
    setClicked(true);
    //const body = { email, password };

    //const req = axios.post(`COLOCAR A URL AQUI`, body);

    /*req.then((resp) => {
      setUserData(resp.data);
      localStorage.setItem("loginUser", JSON.stringify(resp.data));
      history.pushState("/");
    });

    req.catch((error) => {
      setEmail("");
      setPassword("");
      setClicked(false);
      alert("alertar algo");
    });*/
  }

  return (
    <Container>
      <Background></Background>
      <Holder>
        <Login>Login</Login>
        <ContainerForm>
          <form onSubmit={toLogin}>
            <Email
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={clicked}
            />
            <Password
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={clicked}
            />
            <LoginButton type="submit">Login</LoginButton>
          </form>
        </ContainerForm>
        <Link to="/signup">
          <RegisterRedirection>Are you new here?</RegisterRedirection>
        </Link>
      </Holder>
    </Container>
  );
}

//----- Styled Components

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("https://images.pexels.com/photos/65718/pexels-photo-65718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;
`;

const Holder = styled.div`
  height: auto;
  z-index: 1;
  position: fixed;
  top: calc(100vh / 3);
  left: calc((100vw / 2) - 350px / 2);
`;

const Login = styled.h1`
  color: #000000;
  font-size: 32px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 25px;
  font-family: "Russo One", sans-serif;
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0 auto;
  text-align: center;
`;

const Email = styled.input`
  width: 326px;
  height: 58px;
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
  padding-left: 15px;
  font-family: "Cuprum", sans-serif;
  font-size: 20px;
  background-color: #e2e2e2;
  ::placeholder {
    font-family: "Cuprum", sans-serif;
    font-size: 20px;
    color: #000000;
  }
`;

const Password = styled.input`
  width: 326px;
  height: 58px;
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
  padding-left: 15px;
  font-family: "Cuprum", sans-serif;
  font-size: 20px;
  background-color: #e2e2e2;
  ::placeholder {
    font-family: "Cuprum", sans-serif;
    font-size: 20px;
    color: #000000;
  }
`;

const LoginButton = styled.button`
  width: 326px;
  height: 46px;
  border-radius: 5px;
  background-color: #000000;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  font-family: "Cuprum", sans-serif;
  margin-bottom: 30px;
`;

const RegisterRedirection = styled.h2`
  font-weight: bold;
  font-size: 18px;
  font-family: "Cuprum", sans-serif;
  line-height: 18px;
  color: #000000;
  text-align: center;
  cursor: pointer;
`;
