import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchProducts } from '../services/api.service';
import ProductCard from "./ProductCard";

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((r) => setProducts(r.data));
  }, [])
  return <Container>
    {products.map((product, index) => {
      return <ProductCard key={index} productData={product}/>
    })}
    <GhostDiv />
    <GhostDiv />
    <GhostDiv />
  </Container>
}

const Container = styled.div`
margin: 100px auto 0 auto;
max-width: 900px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-content: flex-start;
`

const GhostDiv = styled.div`
width: 200px;
`