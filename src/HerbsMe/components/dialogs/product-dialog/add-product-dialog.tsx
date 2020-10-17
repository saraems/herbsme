import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddProductDialogState } from 'src/HerbsMe/redux/selectors';
import ProductCoreDialog from '.';
import { herbsMeActions } from 'src/HerbsMe/redux';
import { IProduct } from 'src/HerbsMe/types';

const detaultProduct: any = {
  name: '',
  price: undefined,
  categoty: '',
  image: '',
  origin: '',
  harvested: undefined,
  healingProperties: '',
  description: '',
};

const AddProductDialog: FC = () => {
  const dispatch = useDispatch();
  const productDialogState = useSelector(selectAddProductDialogState);
  const { isOpen } = productDialogState;

  const addProduct = (product: IProduct) => {
    dispatch(herbsMeActions.addNewProduct(product));
  };

  const closeAddProductDialog = () => {
    dispatch(herbsMeActions.closeAddProductDialog());
  };

  return (
    isOpen && <ProductCoreDialog product={detaultProduct} onConfirm={addProduct} onClose={closeAddProductDialog} />
  );
};

export default AddProductDialog;
