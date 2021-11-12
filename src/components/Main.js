import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api.service';
import Header from './Header';
import ProductCard from './ProductCard';

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((r) => setProducts(r.data));
  }, []);
  return (
    <>
      <Header />
      <Container>
        {products.map((product, index) => {
          return <ProductCard key={index} productData={product} />;
        })}
        <GhostDiv />
        <GhostDiv />
        <GhostDiv />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 90px auto 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const GhostDiv = styled.div`
  width: 235px;
`;
