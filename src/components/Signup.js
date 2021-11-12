import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../images/gukologo.png';
import { trySignup } from '../services/api.service';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [clicked, setClicked] = useState(false);

  function toRegister(event) {
    event.preventDefault();
    setClicked(true);
    const body = { name, email, address, password, passwordConfirmation };

    if (passwordConfirmation !== password) {
      alert('Passwords do not match, please retype');
    } else {
      trySignup(body)
        .then(() => {
          navigate('/signin');
        })
        .catch(() => {
          setName('');
          setEmail('');
          setPassword('');
          setPasswordConfirmation('');
          setClicked(false);
          alert('Oh no! Something went wrong. Please try again');
        });
    }
  }
  return (
    <Container>
      <Background></Background>
      <Header>
        <StyledLink to='/'>
          <img src={logo} alt='logo' />
        </StyledLink>
      </Header>
      <Holder>
        <Register>Register</Register>
        <ContainerForm>
          <form onSubmit={toRegister}>
            <FormField
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={clicked}
            />
            <FormField
              type='email'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={clicked}
            />
            <FormField
              type='text'
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              disabled={clicked}
            />
            <FormField
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={clicked}
            />
            <FormField
              type='password'
              placeholder='Confirm Password'
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              disabled={clicked}
            />
            <RegisterButton type='submit' disabled={clicked}>
              Register
            </RegisterButton>
          </form>
        </ContainerForm>
        <Link to='/signin'>
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

const Header = styled.div`
  height: 70px;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  img {
    height: 100%;
  }
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('https:images.pexels.com/photos/65718/pexels-photo-65718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
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
  font-family: 'Russo One', sans-serif;
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0 auto;
  text-align: center;
`;

const FormField = styled.input`
  width: 326px;
  height: 58px;
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
  padding-left: 15px;
  font-family: 'Cuprum', sans-serif;
  font-size: 20px;
  background-color: #e2e2e2;
  ::placeholder {
    font-family: 'Cuprum', sans-serif;
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
  font-family: 'Cuprum', sans-serif;
  margin-bottom: 30px;
`;

const LoginRedirection = styled.h2`
  font-weight: bold;
  font-size: 18px;
  font-family: 'Cuprum', sans-serif;
  line-height: 18px;
  color: #000000;
  text-align: center;
  cursor: pointer;
`;
