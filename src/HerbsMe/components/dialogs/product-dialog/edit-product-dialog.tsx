import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditProductDialogState, selectProductsList } from 'src/HerbsMe/redux/selectors';
import ProductCoreDialog from '.';
import { herbsMeActions } from 'src/HerbsMe/redux';
import { IProduct } from 'src/HerbsMe/types';

const EditProductDialog: FC = () => {
  const dispatch = useDispatch();
  const productDialogState = useSelector(selectEditProductDialogState);
  const productsList = useSelector(selectProductsList);
  const { isOpen, currentIndex } = productDialogState;
  const initialProduct = productsList[currentIndex];

  const updateProduct = (product: IProduct) => {
    dispatch(herbsMeActions.updateProduct(product, currentIndex));
  };

  const closeEditProductDialog = () => {
    dispatch(herbsMeActions.closeEditProductDialog());
  };

  return (
    isOpen &&
    initialProduct && (
      <ProductCoreDialog product={initialProduct} onConfirm={updateProduct} onClose={closeEditProductDialog} />
    )
  );
};

export default EditProductDialog;
