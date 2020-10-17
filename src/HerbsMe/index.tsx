import React, { FC } from 'react';
import ProductCard from './components/product-card';
import BlankProductCard from './components/product-card/blank-card';
import TopNavigation from './components/top-nav';
import styled from 'styled-components';
import { IProduct } from './types';
import InputLabel from '@material-ui/core/InputLabel';
import PriceFilter from './components/price-filter';
import SortBySelect from './components/sort-by-select';
import { selectProductsList } from './redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import ConfirmationDialog from './components/dialogs/confirmation-dialog';
import { CustomHerbsMeButton } from './components/custom-button/styles';
import { herbsMeActions } from './redux';
import EditProductDialog from './components/dialogs/product-dialog/edit-product-dialog';
import AddProductDialog from './components/dialogs/product-dialog/add-product-dialog';

const S = {
  PageLayout: styled.div`
    max-width: 1200px;
    min-height: calc(100vh - 3.5rem);
    margin: 0 auto;
  `,
  ItemsActions: styled.div`
    display: flex;
    width: calc(100%-2rem);
    justify-content: space-between;
    padding: 1rem;
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
    padding: 0 0 2rem 0;
    width: 100%;
  `,
  ProductCardWrapper: styled.li``,
  AddProductWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: calc(100%-2rem);
    padding: 2rem 1rem 0;
  `,
  AddProductBtn: styled(CustomHerbsMeButton)`
    height: 50px;
    width: 150px;
    margin: 0;
    font-weight: bold;
    background-color: #677445;
  `,
};
const HerbsMe: FC = () => {
  const dispatch = useDispatch();
  const productsList = useSelector(selectProductsList);
  const showBlankCard = productsList.length < 8;

  const openAddProductDialog = () => dispatch(herbsMeActions.openAddProductDialog());

  return (
    <>
      <TopNavigation />
      <ConfirmationDialog />
      <EditProductDialog />
      <AddProductDialog />
      <S.PageLayout>
        <S.AddProductWrapper>
          <S.AddProductBtn onClick={openAddProductDialog}>Add Product</S.AddProductBtn>
        </S.AddProductWrapper>

        <S.ItemsActions>
          <SortBySelect />
          <PriceFilter />
        </S.ItemsActions>

        <S.ProductsList>
          {productsList.map((product: IProduct, index: number) => (
            <S.ProductCardWrapper key={index}>
              <ProductCard product={product} index={index} />
            </S.ProductCardWrapper>
          ))}
          {showBlankCard && <BlankProductCard />}
        </S.ProductsList>
      </S.PageLayout>
    </>
  );
};

export default HerbsMe;
