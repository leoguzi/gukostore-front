import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory } from '../services/api.service';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import ToTop from './ToTop';

export default function Category() {
  const [products, setProducts] = useState([]);
  let { category } = useParams();
  category = category.replace('%20', ' ');
  useEffect(() => {
    fetchProductsByCategory(category).then((r) => setProducts(r.data));
  }, [category]);

  return (
    <>
      <Header />
      <Title>{category}</Title>
      <Container>
        {products.map((product, index) => {
          return <ProductCard key={index} productData={product} />;
        })}
        <GhostDiv />
        <GhostDiv />
        <GhostDiv />
      </Container>
      <ToTop />
      <Footer />
    </>
  );
}
const Title = styled.h1`
  max-width: 1000px;
  font-weight: bold;
  margin: 90px auto 0 auto;
  font-size: 30px;
  @media (max-width: 600px) {
    margin-left: 10px;
  }
`;

const Container = styled.div`
  margin: 20px auto 0 auto;
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
