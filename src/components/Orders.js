import Footer from './Footer';
import Header from './Header';
import UserContext from '../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchUserOrders } from '../services/api.service';

export default function Orders() {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const firstName = userData.name?.split(' ')[0];
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!userData.token) {
      navigate('/');
    }
    fetchUserOrders(userData.token).then((r) => setOrders(r.data));
  }, []);

  function calculateTotal(itens) {
    let sum = 0;
    itens.forEach((item) => {
      sum += item.quantity * item.price;
    });
    return (sum / 100).toFixed(2);
  }
  return (
    <>
      <Header />
      <Title>{`${firstName}'s orders`}</Title>
      <OrdersList>
        {orders?.length > 0 ? (
          orders?.map((order, index) => {
            return (
              <Order key={index}>
                <h1>{`Order number ${index + 1}`}</h1>
                <ul>
                  {order.itens.map((item) => {
                    return (
                      <li>
                        <StyledSpan>{item.name}</StyledSpan>
                        <div>
                          <StyledSpan>{`${item.quantity} x`}</StyledSpan>
                          <StyledSpan>{`$ ${(item.price / 100).toFixed(
                            2
                          )}`}</StyledSpan>
                        </div>
                      </li>
                    );
                  })}
                  <Total>
                    <span>Total: </span>
                    <span>{`$ ${calculateTotal(order.itens)}`}</span>
                  </Total>
                </ul>
              </Order>
            );
          })
        ) : (
          <NoOrders>No orders yet :/</NoOrders>
        )}
      </OrdersList>
      <Footer />
    </>
  );
}

const Title = styled.h1`
  padding: 15px;
  max-width: 1000px;
  font-weight: bold;
  margin: 90px auto 0 auto;
  font-size: 30px;
`;

const OrdersList = styled.ul`
  max-width: 1000px;
  margin: 0 auto;
  min-height: 400px;
  padding: 15px;
`;

const Order = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  h1 {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
  li div {
    width: 15%;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    li div {
      width: 30%;
    }
  }
`;

const StyledSpan = styled.span`
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 16px;
    max-width: 65%;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const NoOrders = styled.span`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin: 120px 0 120px 400px;
  @media (max-width: 600px) {
    margin: 0;
  }
`;
