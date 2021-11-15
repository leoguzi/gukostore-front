import Header from './Header';
import styled from 'styled-components';
import { colors } from '../globalStyles';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { registerOrder } from '../services/api.service';

export default function Cart() {
  const { cart, setCart, userData } = useContext(UserContext);
  const [total, setTotal] = useState(0);
  const [cardNumber, setCardNumber] = useState('');
  const [invalidField, setInvalidField] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
    let sum = 0;
    cart.forEach((item) => (sum += item.price * item.quantity));

    setTotal(sum.toFixed(2));
  }, [cart, total]);

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

  function handleSubmit(e) {
    e.preventDefault();
    if (!userData.token) {
      return navigate('/signin');
    }
    if (cardNumber.length !== 16) {
      return setInvalidField(true);
    }
    if (cart.length === 0) {
      return alert('The cart is empty!');
    }
    const body = {
      cardNumber,
      products: cart.map((item) => {
        return {
          idProduct: item.id,
          quantity: item.quantity,
        };
      }),
    };
    registerOrder(userData.token, body).then(navigate('/myorders'));
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
                    <ProductImage src={item.image} alt={item.name} />
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
        <SubmitContainer onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="number"
              placeholder="Credit Card"
              onChange={(e) => {
                setCardNumber(e.target.value);
                setInvalidField(false);
              }}
            />
            {invalidField && <span>Invalid data! Must have 16 digits.</span>}
          </div>
          <button type="submit">
            {userData.token ? 'Register Order' : 'Login'}
          </button>
        </SubmitContainer>
      </Container>
      <Footer />
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
  @media (max-width: 600px) {
    width: 100%;
  }
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
  padding: 12px 0;

  div {
    display: flex;
    align-items: center;
  }
`;

const ProductName = styled.span`
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 600px) {
    font-size: 16px;
    width: 130px;
  }
`;

const ProductImage = styled.img`
  width: 70px;
`;

const Quantity = styled.span`
  font-size: 25px;
  margin: 0 10px 0 10px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const MinusIcon = styled(AiFillMinusSquare)`
  color: ${colors.red};
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const PlusIcon = styled(AiFillPlusSquare)`
  color: ${colors.green};
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Total = styled.div`
  width: 100%;
  margin: 20px 0 20px 0;
  display: flex;
  justify-content: space-between;
`;

const RigthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18%;
  @media (max-width: 600px) {
    width: 150px;
  }
`;

const SubmitContainer = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-weight: bold;
    color: ${colors.red};
  }

  button {
    width: 150px;
    height: 50px;
    margin-bottom: 20px;
    background-color: ${colors.green};
    color: ${colors.cardBackground};
    font-size: 20px;
    letter-spacing: 1px;
    border: none;
    border-radius: 5px;
    align-self: center;
    cursor: pointer;
  }

  input {
    font-size: 20px;
    border: 1px solid gray;
    border-radius: 5px;
    width: 400px;
    height: 50px;
    padding-left: 10px;
    margin-bottom: 5px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    button {
      width: 100%;
    }
    input {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
