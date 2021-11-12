import styled from 'styled-components';
import { colors } from '../globalStyles';
import { Link } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import { addToCart } from '../services/api.service';

export default function ProductCard({ productData }) {
  const { id, name, price, images, categories } = productData;
  console.log(productData);

  function updateCart(id, name) {
    let selectedProduct = JSON.parse(sessionStorage.getItem('cart'));
    if (selectedProduct) {
      selectedProduct.push({ id: id, quantity: 1 });
      sessionStorage.setItem('cart', JSON.stringify(selectedProduct));
      selectedProduct = Array.from(
        selectedProduct.reduce(
          (acc, { id, quantity }) => acc.set(id, (acc.get(id) || 0) + quantity),
          new Map()
        ),
        ([id, quantity]) => ({ id, quantity })
      );

      console.log(selectedProduct);
    } else {
      sessionStorage.setItem('cart', JSON.stringify([{ id: id, quantity: 1 }]));
    }

    const body = {
      id,
    };

    addToCart(body)
      .then(alert(`The product ${name} is now in your basket.`))
      .catch((error) => {
        console.log(error);
      });
  }

  //to={`/product/${id}`}

  return (
    <StyledLink to={`/`}>
      <Card>
        <Image src={images[0]} alt={name} />
        <Name>{name}</Name>
        <CategoriesContainer>
          {categories.map((category, index) => {
            return <Category key={index}>{category}</Category>;
          })}
        </CategoriesContainer>
        <Price>$ {(price / 100).toFixed(2)}</Price>
        <CartIcon onClick={() => updateCart(id, name)} />
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
