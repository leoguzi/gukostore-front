import Header from './Header';
import styled from 'styled-components';
import { colors } from '../globalStyles';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';

export default function Cart() {
  const { cart, setCart } = useContext(UserContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function updateCart(id, quantity) {
    if (quantity === 0) {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
    } else {
      cart.forEach((item) => {
        if (item.id === id) {
          item.quantity = quantity;
        }
      });
      setCart([...cart]);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Your Cart</Title>
        <CartList>
          {cart.length !== 0 ? (
            cart.map((item, index) => {
              return (
                <CartItem key={index}>
                  <div>
                    <ProductImage src={item.image} />
                    <ProductName>{item.name}</ProductName>
                  </div>
                  <RigthContainer>
                    <div>
                      <MinusIcon
                        onClick={() => updateCart(item.id, item.quantity - 1)}
                      />
                      <Quantity>{item.quantity}</Quantity>
                      <PlusIcon
                        onClick={() => updateCart(item.id, item.quantity + 1)}
                      />
                    </div>
                    <Price>{`$ ${item.price}`}</Price>
                  </RigthContainer>
                </CartItem>
              );
            })
          ) : (
            <EmptyCart>No itens in the cart yet.</EmptyCart>
          )}
          <Total>
            <ProductName>Total: </ProductName>
            <Price>{`$ ${total}`}</Price>
          </Total>
        </CartList>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 1000px;
  margin: 90px auto 0 auto;
  padding: 15px 15px;
  background-color: ${colors.cardBackground};
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  border-radius: 8px;
`;

const Title = styled.h1`
  max-width: 1000px;
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 30px;
`;

const EmptyCart = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const CartList = styled.ul`
  margin-top: 10px;
`;

const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  div {
    display: flex;
    align-items: center;
  }
`;

const ProductName = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const ProductImage = styled.img`
  width: 100px;
`;

const Quantity = styled.span`
  font-size: 25px;
  margin: 0 10px 0 10px;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const MinusIcon = styled(AiFillMinusSquare)`
  color: ${colors.red};
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const PlusIcon = styled(AiFillPlusSquare)`
  color: ${colors.green};
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const RigthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
`;
