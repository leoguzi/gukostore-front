import styled from 'styled-components';
import Lesson from '../images/guitarlesson.jpg';

export default function GuitarLesson() {
  return (
    <GuitarLessonContainer>
      <h1>HEAR IT. LEARN IT. PLAY IT.</h1>
      <img src={Lesson} alt='Guitar Lesson' />
      <h2>Buy any gear and get 5 guitar lessons for free</h2>
    </GuitarLessonContainer>
  );
}

const GuitarLessonContainer = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: #29221d;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  margin: 80px auto;

  img {
    width: 1000px;
  }

  h1 {
    color: #fff;
    font-size: 45px;
  }

  h2 {
    color: #fff;
    font-size: 25px;
  }
`;
