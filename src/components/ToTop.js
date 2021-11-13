import { CgArrowUpR } from 'react-icons/cg';
import styled from 'styled-components';

export default function ToTop() {
  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <Arrow>
      <CgArrowUpR size={40} color={'#f9943b'} onClick={toTop} />
    </Arrow>
  );
}

//----- Styled Component -----

const Arrow = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 3;

  @media (max-width: 1200px) {
    display: none;
  }
`;
