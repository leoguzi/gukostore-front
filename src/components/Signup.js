import styled from "styled-components";

export default function Signup() {
  function toRegister() {
    alert("hello");
  }
  return (
    <Container>
      <Holder>
        <Logo>Register</Logo>
        <ContainerForm>
          <form onSubmit={toRegister}>
            <Name type="text" placeholder="Name" />
            <Email type="email" placeholder="E-mail" />
            <Password type="password" placeholder="Password" />
            <PasswordConfirmation
              type="password"
              placeholder="Confirm Password"
            />
            <RegisterButton type="submit">Register</RegisterButton>
          </form>
        </ContainerForm>
        <EnterNow>Have you bought from us before?</EnterNow>
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

const Holder = styled.div`
  height: auto;
  padding-top: calc(100vh / 6);
`;

const Logo = styled.h1`
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

const EnterNow = styled.h2`
  font-weight: bold;
  font-size: 18px;
  font-family: "Cuprum", sans-serif;
  line-height: 18px;
  color: #000000;
  text-align: center;
  cursor: pointer;
`;
