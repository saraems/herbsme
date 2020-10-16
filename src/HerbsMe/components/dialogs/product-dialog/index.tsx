import React, { FormEvent, FC } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductDialogState } from 'src/HerbsMe/redux/selectors';
import { herbsMeActions } from 'src/HerbsMe/redux';
import { useFormField, useNumberFormField } from './hooks';
import { IProduct } from 'src/HerbsMe/types';

const S = {
  SelectMenu: styled(Select)`
    width: 100%;
  `,
  SelectLabel: styled(InputLabel)`
    margin-top: 1rem;
  `,
};

const productTemplate = {
  name: '',
  price: 0,
  categoty: '',
  image: '',
  origin: '',
  harvested: 0,
  healingProperties: '',
  description: '',
};

enum ProductCategories {
  herb = 'Herb',
  flower = 'Flower',
  fruit = 'Fruit',
  root = 'Root',
}

interface IProductDialog { 
  productDef?: IProduct;
}

const ProductDialog: FC<IProductDialog> = ({ productDef}) => {
  const dispatch = useDispatch();
  const productDialogState = useSelector(selectProductDialogState);
  const { isOpen, currentIndex, product } = productDialogState;


  const initialProduct = !!currentIndex && !!product ? product : productTemplate
  const { name, price, categoty, image, origin, harvested, healingProperties, description } = initialProduct;

  const nameField = useFormField(name);
  const priceField = useNumberFormField(price);
  const categotyField = useFormField(categoty);
  const imageField = useFormField(image);
  const originField = useFormField(origin);
  const harvestedField = useNumberFormField(harvested);
  const healingPropertiesField = useFormField(healingProperties);
  const descriptionField = useFormField(description);

    const handleClose = () => {
    dispatch(herbsMeActions.closeProductDialog());
    };
  
  const addingIsDisabled = !nameField && !priceField && !originField && !imageField;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      herbsMeActions.addNewProduct({
        name: nameField.value,
        price: priceField.value,
        categoty: categotyField.value,
        image: imageField.value,
        origin: originField.value,
        harvested: harvestedField.value,
        healingProperties: healingPropertiesField.value,
        description: descriptionField.value,
      })
    );
    dispatch(herbsMeActions.closeProductDialog());
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Product</DialogTitle>

        <DialogContent>
          <form>
            <TextField autoFocus margin="dense" id="name" label="Product Name" fullWidth {...nameField} />
            <TextField margin="dense" id="price" label="Price" type="number" fullWidth {...priceField} />

            <S.SelectLabel id="demo-simple-select-label">Category</S.SelectLabel>
            <S.SelectMenu labelId="demo-simple-select-label" id="demo-simple-select" {...categotyField}>
              <MenuItem value={ProductCategories.herb}>Herb</MenuItem>
              <MenuItem value={ProductCategories.flower}>Flower</MenuItem>
              <MenuItem value={ProductCategories.fruit}>Fruit</MenuItem>
              <MenuItem value={ProductCategories.root}>Root</MenuItem>
            </S.SelectMenu>

            <TextField margin="dense" id="image" label="Image url" fullWidth {...imageField} />
            <TextField margin="dense" id="origin" label="Region of origin" fullWidth {...originField} />
            <TextField margin="dense" id="harvested" label="Harvest year" type="number" fullWidth {...harvestedField} />
            <TextField margin="dense" id="healingProperties" label="Healing properties" fullWidth {...healingPropertiesField} />
            <TextField margin="dense" id="description" label="Description" fullWidth multiline {...descriptionField} />
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" type="submit" disabled={!addingIsDisabled}>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductDialog;
