import styled from "styled-components";

export default function Signup() {
  function toRegister() {
    alert("hello");
  }
  return (
    <Container>
      <Background></Background>
      <Holder>
        <Logo>Login</Logo>
        <ContainerForm>
          <form onSubmit={toRegister}>
            <Email type="email" placeholder="E-mail" />
            <Password type="password" placeholder="Password" />
            <RegisterButton type="submit">Login</RegisterButton>
          </form>
        </ContainerForm>
        <EnterNow>Are you new here?</EnterNow>
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
