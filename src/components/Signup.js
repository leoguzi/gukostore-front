import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
//import axios from "axios";

export default function Signup() {
  //const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [clicked, setClicked] = useState(false);

  function toRegister(event) {
    event.preventDefault();
    setClicked(true);
    //const body = { name, email, address, password, passwordConfirmation };

    if (passwordConfirmation !== password) {
      alert("Passwords do not match, please retype");
    } else {
      //const req = axios.post(`COLOCAR A URL AQUI`, body);
      //req.then((resp) => {
      //history.push("/");
      //});
      //req.catch((error) => {
      //  setName("");
      //setEmail("");
      //setPassword("");
      //setPasswordConfirmation("");
      //setClicked(false);
      //alert("Oh no! Something went wrong. Please try again");
      //});
    }
  }
  return (
    <Container>
      <Background></Background>
      <Holder>
        <Register>Register</Register>
        <ContainerForm>
          <form onSubmit={toRegister}>
            <Name
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={clicked}
            />
            <Email
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={clicked}
            />
            <Address
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              disabled={clicked}
            />
            <Password
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={clicked}
            />
            <PasswordConfirmation
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              disabled={clicked}
            />
            <RegisterButton type="submit" disabled={clicked}>
              Register
            </RegisterButton>
          </form>
        </ContainerForm>
        <Link to="/signin">
          <LoginRedirection>Have you bought from us before?</LoginRedirection>
        </Link>
      </Holder>
    </Container>
  );
}

//----- Styled Components

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
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
  top: calc(100vh / 5);
  left: calc((100vw / 2) - 350px / 2);
`;

const Register = styled.h1`
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

const Name = styled.input`
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

const Address = styled.input`
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

const PasswordConfirmation = styled.input`
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

const RegisterButton = styled.button`
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

const LoginRedirection = styled.h2`
  font-weight: bold;
  font-size: 18px;
  font-family: "Cuprum", sans-serif;
  line-height: 18px;
  color: #000000;
  text-align: center;
  cursor: pointer;
`;
