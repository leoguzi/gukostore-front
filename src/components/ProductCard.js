import styled from 'styled-components';
import { colors } from '../globalStyles';
import { Link, useNavigate } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext.js';

export default function ProductCard({ productData }) {
  const navigate = useNavigate();
  const { id, name, price, images, categories } = productData;
  const { setCart, cart } = useContext(UserContext);

  function updateCart(id, name, price, quantity, e) {
    e.preventDefault();
    const newItem = { id, name, price, quantity };

    const filteredCart = cart.filter((item) => item.id === id);

    filteredCart.length > 0
      ? (filteredCart[0].quantity += quantity)
      : setCart([...cart, newItem]);

    sessionStorage.setItem('cart', JSON.stringify(cart));

    navigate('/cart');
  }

  return (
    <StyledLink to={`/product/${id}`}>
      <Card>
        <Image src={images[0]} alt={name} />
        <Name>{name}</Name>
        <CategoriesContainer>
          {categories.map((category, index) => {
            return <Category key={index}>{category}</Category>;
          })}
        </CategoriesContainer>
        <Price>$ {(price / 100).toFixed(2)}</Price>
        <CartIcon onClick={(e) => updateCart(id, name, price, 1, e)} />
      </Card>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  width: 235px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Card = styled.div`
  position: relative;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px grey;
  border-radius: 5px;
  width: 235px;
  height: 350px;
  margin-bottom: 30px;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
    border-radius: 0px;
  }
`;

const Image = styled.img`
  width: 190px;
  height: 190px;
  align-self: center;
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Category = styled.span`
  width: 47%;
  height: 18px;
  font-size: 12px;
  padding-top: 3px;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  background-color: ${colors.category};
`;

const Name = styled.span`
  font-weight: bold;
`;
const Price = styled.span`
  font-weight: bold;
`;

const CartIcon = styled(BsCartPlus)`
  font-size: 22px;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;
