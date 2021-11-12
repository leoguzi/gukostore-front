import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProduct } from '../services/api.service';
import styled from 'styled-components';
import { colors } from '../globalStyles';
import { BsCartPlus } from 'react-icons/bs';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import Header from './Header';

export default function Product() {
  const { id } = useParams();
  const [discount, setDiscount] = useState(0);
  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    fetchProduct(id).then((r) => setProduct(r.data));
    setDiscount((Math.random() * 200).toFixed(2));
  }, [id]);

  const { name, description, categories, images } = product;
  let { price } = product;
  price = (price / 100).toFixed(2);

  useEffect(() => {
    setMainImage(images && images[0]);
    setImagesList(
      images?.map((image, index) => ({
        url: image,
        selected: index === 0 ? true : false,
      }))
    );
  }, [images]);

  function updateList(index) {
    setMainImage(imagesList[index].url);
    imagesList.forEach((image) => (image.selected = false));
    imagesList[index].selected = true;
    setImagesList([...imagesList]);
  }

  function updateCart(idProduct) {}
  return (
    <>
      <Header />
      <ProductContainer>
        <ProductTitle>{name}</ProductTitle>
        <div>
          {categories?.map((category, index) => {
            return (
              <Link key={index} to={`/category/${category}`}>
                <Category>{category}</Category>
              </Link>
            );
          })}
        </div>
        <div>
          <ImgList>
            {imagesList?.map((image, index) => {
              return (
                <StyledLi
                  selected={image.selected}
                  key={index}
                  onClick={() => updateList(index)}
                >
                  <img src={image.url} alt={name} />
                </StyledLi>
              );
            })}
          </ImgList>
          <MainImage src={mainImage} alt={name} />
          <ProductInfo>
            <OriginalPrice>{`$ ${price}`}</OriginalPrice>
            <Price>{`$ ${(price - discount).toFixed(2)}`}</Price>
            <Percentage>
              {`You save ${((discount / price) * 100).toFixed(2)}%`}
            </Percentage>
            <StockInfo>In Stock & Ready to Ship</StockInfo>
            <QuantityCounter>
              <MinusIcon
                onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
              />
              <Quantity>{quantity}</Quantity>
              <PlusIcon onClick={() => setQuantity(quantity + 1)} />
              <CartIcon onClick={() => updateCart(id)} />
            </QuantityCounter>
          </ProductInfo>
        </div>
        <Description>
          <h1>Overview</h1>
          <span>{`${description}`}</span>
        </Description>
      </ProductContainer>
    </>
  );
}

const ProductContainer = styled.div`
  width: 1000px;
  margin: 90px auto 0 auto;
  padding: 15px 15px;
  background-color: ${colors.cardBackground};
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  border-radius: 5px;
  div:nth-child(2) {
    display: flex;
  }
  div:nth-child(3) {
    display: flex;
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    width: 100%;
    div:nth-child(3) {
      flex-direction: column;
      margin-bottom: 10px;
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

  img {
    margin: 10px 10px;
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 90px;
    display: flex;
    margin-bottom: 5px;
  }
`;

const StyledLi = styled.li`
  padding: 3px;
  margin-bottom: 3px;
  display: flex;
  justify-content: center;
  border: ${(props) =>
    props.selected ? `2px solid ${colors.category}` : '1px solid gray'};
  @media (max-width: 600px) {
    width: 70px;
    margin-right: 5px;
  }
`;

const MainImage = styled.img`
  width: 43%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const OriginalPrice = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: line-through;
  @media (max-width: 600px) {
    margin: 20px 0 0 0;
  }
`;

const Price = styled.span`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${colors.red};
  @media (max-width: 600px) {
    margin: 10px 0 10px 0;
  }
`;

const Percentage = styled.span`
  padding: 7px 9px;
  background-color: ${colors.red};
  color: ${colors.background};
  margin-bottom: 10px;
  @media (max-width: 600px) {
    position: absolute;
    right: 5px;
    top: 18px;
  }
`;

const ProductInfo = styled.div`
  position: relative;
  width: 50%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 600px) {
    align-items: flex-start;
    width: 100%;
  }
`;

const StockInfo = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.green};
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

const QuantityCounter = styled.div`
  position: absolute;
  display: flex;
  bottom: 10px;
  left: 10px;
  @media (max-width: 600px) {
    font-size: 16px;
    left: unset;
    right: 5px;
    bottom: 25px;
  }
`;

const Quantity = styled.span`
  font-size: 40px;
  margin: 0 10px 0 10px;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const MinusIcon = styled(AiFillMinusSquare)`
  color: ${colors.red};
  font-size: 40px;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const PlusIcon = styled(AiFillPlusSquare)`
  color: ${colors.green};
  font-size: 40px;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const CartIcon = styled(BsCartPlus)`
  font-size: 40px;
  margin-left: 10px;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const Description = styled.div`
  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  span {
    display: inline-block;
    width: 100%;
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
  }
`;
