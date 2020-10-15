import React, {FC} from 'react';
import { IProduct } from '../../types';
import styled from 'styled-components';


const BasicCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 450px;
  width: 250px;
  padding: 1rem;
  font-family: Comfortaa;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 1rem;
`

const Img = styled.div<{ url: string }>`
  height: 200px;
  width: 200px;
  background-image: ${({ url }) => `url('${url}')`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f9f9f9;
`

const ProductName = styled.h2`
  font-size: 14px;
  text-align: center;
  margin: 1rem 0 0.5rem 0;
  font-weight: bold;
`

const Summarry = styled.span`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
  color: #b2b2b2;
`

const Price = styled.span`
  color: #333;
  margin: 1rem 0;
  letter-spacing: 1px;
`

const HealingProperties = styled.div`
  color: #6E6E6E;
  font-size: 10px;
  font-weight: 800;
  text-align: center;
  margin: 0.5rem 0;
`

const Description = styled.div`
  color: #6E6E6E;
  font-size: 10px;
  text-align: center;
  line-height: 1.5;
  width: 100%;
  max-height: 105px;
  overflow: hidden;
  text-overflow: ellipsis;
`


interface IProductCard { 
  product: IProduct;
}

const currency = 'NOK/100g'

const ProductCard: FC<IProductCard> = ({ product }) => {
  const { name, price, categoty, image, origin, harvested, healingProperties, description } = product;

  return (
      <BasicCard role="link" tabIndex={0}>
      <Img url={image} aria-label={name} />
      <ProductName> {name} </ProductName>
      <Summarry>
        {categoty} • {harvested} • {origin}
      </Summarry>
      <HealingProperties>{healingProperties}</HealingProperties>
      <Price> {price} {currency} </Price>

      <Description>{description}</Description>
    </BasicCard>
  );
};

export default ProductCard;

