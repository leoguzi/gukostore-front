import styled from 'styled-components';
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from 'react-icons/ai';
import seal from '../images/satisfaction.png';

export default function Footer() {
  return (
    <Container>
      <ContainerTop>
        <ContainerTopMessage>
          <h1>Our social media</h1>
        </ContainerTopMessage>
        <ContainerTopLinks>
          <AiFillFacebook size={50} color={'#FFFFFF'} />
          <AiFillInstagram size={50} color={'#FFFFFF'} />
          <AiFillTwitterCircle size={50} color={'#FFFFFF'} />
          <AiFillYoutube size={50} color={'#FFFFFF'} />
        </ContainerTopLinks>
      </ContainerTop>
      <ContainerBottom>
        <ContainerBottomLeft>
          <img src={seal} alt='logo' />
          <h1>BEST GUITAR STORE IN LATIN AMERICA</h1>
        </ContainerBottomLeft>
        <ContainerBottomRight>
          <h1>
            Guko Store, Rua Driven Bootcamp zip-code: 20201-123 Get Directions |
            Phone Hours | Store Hours Explore our commitments to you Terms of
            Use Privacy Policy Phone Recording Policy Accessibility Do Not Sell
            My Personal Information If you have any questions, please call us at
            (+55) 21 2222-2222
          </h1>
          <h2>
            Copyright © 2021, Guko Limited, All Rights Reserved. v.1.5.0 - Node
            2 .
          </h2>
        </ContainerBottomRight>
      </ContainerBottom>
    </Container>
  );
}

//----- Styled Components -----

const Container = styled.div`
  height: 350px;
  width: 100vw;
  background-color: black;
`;

const ContainerTop = styled.div`
  height: 40%;
  width: 100%;
  background-image: url('https://img.freepik.com/free-vector/black-carbon-fiber-texture-background_1017-23627.jpg?size=626&ext=jpg');
`;

const ContainerTopMessage = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Cuprum', sans-serif;
    font-size: 22px;
    color: #ffffff;
  }
`;

const ContainerTopLinks = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerBottom = styled.div`
  height: 60%;
  width: 100%;
  background-color: #000;
  display: flex;
`;

const ContainerBottomLeft = styled.div`
  height: 100%;
  width: 50%;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: 'Cuprum', sans-serif;
    font-size: 23px;
    letter-spacing: 1px;
    color: #fff;
  }
  img {
    height: 200px;
    margin-right: 20px;
  }
`;

const ContainerBottomRight = styled.div`
  height: 100%;
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-family: 'Cuprum', sans-serif;
    font-size: 18px;
    color: #fff;
  }

  h2 {
    font-family: 'Cuprum', sans-serif;
    font-size: 13px;
    color: #fff;
  }
`;
