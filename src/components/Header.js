import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsCart, BsCartFill } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { colors } from '../globalStyles';
import UserContext from '../contexts/UserContext';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const { userData, setUserData, cart } = useContext(UserContext);
  const firstName = userData.name?.split(' ')[0];

  function logout() {
    localStorage.removeItem('loginUser');
    setUserData({});
  }

  return (
    <>
      <Content>
        <Link to="/">
          <h1>GukoStore</h1>
          <CategoriesContainer>
            <Menu onClick={() => setShowCategories(!showCategories)}>
              <span>Shop by Category</span>
            </Menu>
            {!showCategories ? (
              <ArrowDown onClick={() => setShowCategories(!showCategories)} />
            ) : (
              <ArrowUp onClick={() => setShowCategories(!showCategories)} />
            )}
          </CategoriesContainer>
          <DropCategories top={showCategories}>
            <Link to="/Stratocaster">
              <p>Stratocaster</p>
            </Link>
            <Link to="/Telecaster">
              <p>Telecaster</p>
            </Link>
            <Link to="/Les20%Paul">
              <p>Les Paul</p>
            </Link>
            <Link to="/Flaying%20V">
              <p>Flaying V</p>
            </Link>
            <Link to="/Double%20Cut">
              <p>Double Cut</p>
            </Link>
            <Link to="/6%20Strings">
              <p>6 Strings</p>
            </Link>
            <Link to="/7%20Strings">
              <p>7 Strings</p>
            </Link>
            <Link to="/8%20Strings">
              <p>8 Strings</p>
            </Link>
          </DropCategories>
        </Link>
        <Link to="/cart">
          {cart.length > 0 ? <FilledCartIcon /> : <CartIcon />}
        </Link>
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
      <Background
        display={showCategories}
        onClick={() => setShowCategories(!showCategories)}
      />
      <DropDown top={showMenu}>
        {userData.token && (
          <Link to="/orders">
            <p>My Orders</p>
          </Link>
        )}
        {!userData.token && (
          <Link to="/signin">
            <p>Login</p>
          </Link>
        )}
        {userData.token && (
          <Link to="/" onClick={logout}>
            <p>Logout</p>
          </Link>
        )}
      </DropDown>
    </>
  );
}

const Content = styled.div`
  position: relative;
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
  z-index: 2;
  box-shadow: 0px 0px 5px grey;

  h1 {
    color: ${colors.background};
    font-size: 40px;
    line-height: 54px;
    font-family: 'Russo One', sans-serif;
    letter-spacing: 1px;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 20px;
    }
  }
`;

const Menu = styled.div`
  height: 50px;
  font-size: 18px;
  border-radius: 50%;
  background-color: ${colors.category};
  span {
    color: ${colors.background};
    font-weight: bold;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ArrowDown = styled(IoIosArrowDown)`
  color: ${colors.background};
  font-size: 25px;
  margin-right: 8px;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const ArrowUp = styled(IoIosArrowUp)`
  color: ${colors.background};
  font-size: 25px;
  margin-right: 8px;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: ${(props) => (props.display ? '' : 'none')};
  z-index: 1;
`;

const DropDown = styled.div`
  top: ${(props) => (props.top ? '60px' : '-58px')};
  right: 0;
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
    margin-top: 5px;

    :hover {
      color: #b5b0b0;
      transition-duration: 0.2s;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 14px;
    }
  }
`;

const CartIcon = styled(BsCart)`
  color: ${colors.background};
  font-size: 30px;
  position: absolute;
  right: 150px;
  bottom: 14px;
  @media (max-width: 600px) {
    font-size: 20px;
    right: 110px;
    bottom: 20px;
  }
`;

const FilledCartIcon = styled(BsCartFill)`
  color: ${colors.background};
  font-size: 30px;
  position: absolute;
  right: 150px;
  bottom: 14px;
  @media (max-width: 600px) {
    font-size: 20px;
    right: 110px;
    bottom: 20px;
  }
`;

const CategoriesContainer = styled.div`
  position: absolute;
  z-index: 2;
  left: 300px;
  bottom: 4px;
`;

const DropCategories = styled.div`
  top: ${(props) => (props.top ? '50px' : '-160px')};
  left: 280px;
  width: 165px;
  background-color: ${colors.category};
  position: fixed;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  cursor: pointer;
  z-index: 0;
  transition: top 150ms ease-in-out;

  p {
    color: ${colors.background};
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05em;
    margin-top: 5px;

    :hover {
      color: #b5b0b0;
      transition-duration: 0.2s;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 14px;
    }
  }
`;
