import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useContext, useState } from 'react';
//import SearchProduct from './SearchProduct';
import { colors } from '../globalStyles';
import UserContext from '../contexts/UserContext';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const firstName = userData.name.split(' ')[0];
  function logout() {}

  return (
    <>
      <Content>
        <Link to="/">
          <h1>GukoStore</h1>
        </Link>
        {/*<SearchProduct />*/}
        <div>
          {!showMenu ? (
            <ArrowDown onClick={() => setShowMenu(!showMenu)} />
          ) : (
            <ArrowUp onClick={() => setShowMenu(!showMenu)} />
          )}
          <Menu onClick={() => setShowMenu(!showMenu)}>
            <span>{userData.token ? firstName : 'User'}</span>
          </Menu>
        </div>
      </Content>
      <Background display={showMenu} onClick={() => setShowMenu(!showMenu)} />
      <DropDown top={showMenu}>
        <Link to="/signin">
          <p>Login</p>
        </Link>
        <Link to="/orders">
          <p>My Orders</p>
        </Link>
        <Link to="/" onClick={logout}>
          <p>Logout</p>
        </Link>
      </DropDown>
    </>
  );
}

const Content = styled.div`
  background-color: ${colors.category};
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;

  h1 {
    color: ${colors.background};
    font-weight: bold;
    font-size: 40px;
    line-height: 54px;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

const Menu = styled.div`
  height: 50px;
  border-radius: 50%;
  background-color: ${colors.category};
  span {
    color: ${colors.background};
    font-weight: bold;
  }
`;

const ArrowDown = styled(IoIosArrowDown)`
  color: ${colors.background};
  font-size: 25px;
  margin-right: 8px;
  cursor: pointer;
`;

const ArrowUp = styled(IoIosArrowUp)`
  color: ${colors.background};
  font-size: 25px;
  margin-right: 8px;
  cursor: pointer;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: ${(props) => (props.display ? '' : 'none')};
  z-index: 8;
`;

const DropDown = styled.div`
  top: ${(props) => (props.top ? '60px' : '-58px')};
  right: 0;
  height: 109px;
  width: 120px;
  background-color: ${colors.category};
  position: fixed;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  cursor: pointer;
  z-index: 1;
  transition: top 150ms ease-in-out;

  p {
    color: ${colors.background};
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05em;

    :hover {
      color: #b5b0b0;
      transition-duration: 0.2s;
    }
  }

  p:nth-child(3) {
    :hover {
      color: #cc1f1f;
    }
  }
`;
