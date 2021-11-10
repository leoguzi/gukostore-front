import styled from "styled-components"

export default function ProductCard({ productData }) {
    const { id, name, price, images, categories} = productData;

    return <Card>
        <Image src={images[0]} />
        <ProductInfo>
        <Name>{name}</Name>
        <Price>$ {(price / 100).toFixed(2)}</Price>
</ProductInfo>
    </Card>
}

const Card = styled.div`
background-color: #FFFFFF;
box-shadow: 0px 0px 5px grey;
border-radius: 5px;
width: 280px;
height: 270px;
margin-bottom: 30px;
padding: 15px 0;
display: flex;
justify-content: space-around;
`;
const Image = styled.img`
width: 190px;
height: 200px;
`;

const ProductInfo = styled.div`
            
            `
const Name = styled.span`
font-weight: bold;
overflow-wrap: break-word;

`;
const Price = styled.span``;