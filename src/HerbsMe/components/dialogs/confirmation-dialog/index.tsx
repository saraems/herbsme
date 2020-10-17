import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { selectConfirmeDeleteDialogState, selectProductsList } from 'src/HerbsMe/redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { herbsMeActions } from 'src/HerbsMe/redux';
import styled from 'styled-components';

const ProductName = styled.span`
  font-weight: bold;
  color: black;
  letter-spacing: 0.25px;
`;

const ConfirmDialog = styled(Dialog)`
  font-family: Comfortaa;
`;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmationDialog: FC = () => {
  const dispatch = useDispatch();
  const confirmationDialogState = useSelector(selectConfirmeDeleteDialogState);
  const { isOpen, currentIndex } = confirmationDialogState;
  const productName = useSelector(selectProductsList)[currentIndex]?.name;

  const handleClose = () => {
    dispatch(herbsMeActions.closeDeleteDialog());
  };

  const deleteProduct = () => {
      dispatch(herbsMeActions.deleteProduct(currentIndex));
      dispatch(herbsMeActions.closeDeleteDialog());
  };

  return (
    <ConfirmDialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">Are you sure you want to delete this product? </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          This action can't be undone. <br />
          <ProductName>{productName}</ProductName> will be removed from your products list.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Cancel
        </Button>
        <Button onClick={deleteProduct} variant="contained" color="secondary">
          Delete
        </Button>
      </DialogActions>
    </ConfirmDialog>
  );
};

export default ConfirmationDialog;
