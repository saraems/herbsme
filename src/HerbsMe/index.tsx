import React, { FC } from 'react';
import ProductCard from './components/product-card';
import BlankProductCard from './components/product-card/blank-card';
import TopNavigation from './components/top-nav';
import styled from 'styled-components';
import { initialProductsList } from './constants';
import { IProduct } from './types';
import ProductDialog from './components/dialogs/product-dialog';
import InputLabel from '@material-ui/core/InputLabel';
import PriceFilter from './components/price-filter';
import SortBySelect from './components/sort-by-select';

const S = {
  PageLayout: styled.div`
    max-width: 1200px;
    min-height: calc(100vh - 3.5rem);
    margin: 0 auto;
  `,
  ItemsActions: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `,
  SortByWrapper: styled.div`
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: flex-start;
  `,
  SelectLabel: styled(InputLabel)`
    margin-right: 1rem;
  `,
  ProductsList: styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem 0;
    width: 100%;
  `,
  ProductCardWrapper: styled.li``,
};

const HerbsMe: FC = () => {
  return (
    <>
      <TopNavigation />
      <ProductDialog />
      <S.PageLayout>
        <S.ItemsActions>
          <SortBySelect/>
          <PriceFilter />
        </S.ItemsActions>

        <S.ProductsList>
          {initialProductsList.map((product: IProduct) => (
            <S.ProductCardWrapper>
              <ProductCard product={product} />
            </S.ProductCardWrapper>
          ))}
          <BlankProductCard />
        </S.ProductsList>
      </S.PageLayout>
    </>
  );
};

export default HerbsMe;
