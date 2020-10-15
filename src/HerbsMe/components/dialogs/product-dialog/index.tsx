import React from 'react';
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

const S = {
  SelectMenu: styled(Select)`
    width: 100%;
  `,
  SelectLabel: styled(InputLabel)`
    margin-top: 1rem;
  `,
};

const ProductDialog = () => {
  const dispatch = useDispatch();
  const productDialogState = useSelector(selectProductDialogState);
  const { isOpen } = productDialogState;

  const handleClose = () => {
    dispatch(herbsMeActions.closeProductDialog());
  };

  const [category, setCategory] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Product</DialogTitle>

        <DialogContent>
          <TextField autoFocus margin="dense" id="name" label="Product Name" fullWidth />

          <TextField margin="dense" id="price" label="Price" type="number" fullWidth />

          <S.SelectLabel id="demo-simple-select-label">Category</S.SelectLabel>
          <S.SelectMenu
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={handleChange}
          >
            <MenuItem value={'Herb'}>Herb</MenuItem>
            <MenuItem value={'Flower'}>Flower</MenuItem>
            <MenuItem value={'Fruit'}>Fruit</MenuItem>
          </S.SelectMenu>

          <TextField margin="dense" id="image" label="Image url" fullWidth />

          <TextField margin="dense" id="price" label="Region of origin" fullWidth />

          <TextField margin="dense" id="price" label="Harvest year" type="number" fullWidth />

          <TextField margin="dense" id="price" label="Healing properties" fullWidth />

          <TextField margin="dense" id="description" label="Description" fullWidth />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductDialog;
