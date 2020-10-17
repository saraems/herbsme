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
import { IProduct } from 'src/HerbsMe/types';
import { useNumberFormField, useFormField } from 'src/HerbsMe/hooks';

const S = {
  SelectMenu: styled(Select)`
    width: 100%;
  `,
  SelectLabel: styled(InputLabel)`
    margin-top: 1rem;
  `,
  SubTitle: styled.span`
    font-size: 0.875rem;
    color: #b2b2b2;
  `,
};

enum ProductCategories {
  herb = 'Herb',
  flower = 'Flower',
  fruit = 'Fruit',
  root = 'Root',
}

interface IProductDialog {
  product?: IProduct;
  onConfirm: Function;
  onClose: () => void;
}

const ProductCoreDialog: FC<IProductDialog> = ({ product, onConfirm, onClose }) => {
  const { name, price, categoty, image, origin, harvested, healingProperties, description } = product;

  const nameField = useFormField(name);
  const priceField = useNumberFormField(price);
  const categotyField = useFormField(categoty);
  const imageField = useFormField(image);
  const originField = useFormField(origin);
  const harvestedField = useNumberFormField(harvested);
  const healingPropertiesField = useFormField(healingProperties);
  const descriptionField = useFormField(description);

  const isDiasabled = !nameField.value || !priceField.value || !categotyField.value || !harvestedField.value;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onConfirm({
      name: nameField.value,
      price: priceField.value,
      categoty: categotyField.value,
      image: imageField.value,
      origin: originField.value,
      harvested: harvestedField.value,
      healingProperties: healingPropertiesField.value,
      description: descriptionField.value,
    });
    onClose();
  };

  return (
    <div>
      <Dialog open={true} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Product <br />
          <S.SubTitle>* Product name, harvest year, price and category are required fields</S.SubTitle>
        </DialogTitle>

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
            <TextField
              margin="dense"
              id="healingProperties"
              label="Healing properties"
              fullWidth
              {...healingPropertiesField}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              fullWidth
              multiline
              rowsMax={7}
              {...descriptionField}
            />
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" type="submit" disabled={isDiasabled}>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductCoreDialog;
