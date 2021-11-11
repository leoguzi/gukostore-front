import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProduct } from '../services/api.service';
import styled from 'styled-components';
import { colors } from '../globalStyles';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState('');
  useEffect(() => fetchProduct(id).then((r) => setProduct(r.data)), [id]);
  const { name, price, description, categories, images } = product;
  useEffect(() => setMainImage(images && images[0]), [images]);

  return (
    <ProductContainer>
      <ProductTitle>{name}</ProductTitle>
      <div>
        {categories?.map((category, index) => {
          return (
            <Link to={`/category/${category}`}>
              <Category key={index}>{category}</Category>
            </Link>
          );
        })}
      </div>
      <div>
        <ImgList>
          {images?.map((image, index) => {
            return (
              <li key={index} onClick={() => setMainImage(image)}>
                <img src={image} alt={name} />
              </li>
            );
          })}
        </ImgList>
        <MainImage src={mainImage} alt={name} />
        <ProductInfo>
          <Price>{`$ ${(price / 100).toFixed(2)}`}</Price>
        </ProductInfo>
      </div>
      <h1>{`${description}`}</h1>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  width: 1000px;
  margin: 90px auto 0 auto;
  padding: 15px 15px;
  background-color: ${colors.cardBackground};
  display: flex;
  flex-direction: column;
  div:nth-child(2) {
    display: flex;
  }
  div:nth-child(3) {
    display: flex;
  }
  @media (max-width: 600px) {
    width: 100%;
    div:nth-child(3) {
      flex-direction: column;
    }
  }
`;

const ProductTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ImgList = styled.ul`
  width: 7%;
  li {
    padding: 3px;
    margin-bottom: 3px;
    display: flex;
    justify-content: center;
    border: 1px solid grey;
  }
  img {
    margin: 10px 10px;
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 90px;
    display: flex;
    margin-bottom: 5px;

    li {
      width: 70px;
      margin-right: 5px;
    }
  }
`;

const MainImage = styled.img`
  width: 43%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Price = styled.span`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const ProductInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;

const Category = styled.span`
  display: block;
  margin-right: 5px;
  height: 20px;
  width: 130px;
  font-size: 16px;
  padding-top: 3px;
  font-weight: bold;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: ${colors.category};
`;
