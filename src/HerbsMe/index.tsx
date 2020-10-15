import React, {FC} from 'react';
import ProductCard from './components/product-card'
import BlankProductCard from './components/product-card/blank-card';
import TopNavigation from './components/top-nav';
import styled from 'styled-components';
import { initialProductsList } from './constants'
import { IProduct } from './types';


const S = {
  PageLayout: styled.div`
   max-width: 1200px;
   min-height: calc(100vh - 3.5rem);
   margin: 0 auto;
  `, 
  ProductsList: styled.ul`
  display:flex;
  list-style: none;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 0;
  width: 100%;
  `

}

const HerbsMe: FC = () => {
  return (
    <>
      <TopNavigation />
      <S.PageLayout>
        <S.ProductsList>
          {initialProductsList.map((product: IProduct) => (
            <li>
              <ProductCard product={product} />
            </li>
          ))}
          <BlankProductCard/>
        </S.ProductsList>
      </S.PageLayout>
    </>
  );
};

export default HerbsMe;



