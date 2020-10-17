import { RootState } from "src/store/store";

export const selectProducts = (state: RootState) => state.herbsMe.products
export const selectProductsList = (state: RootState) => selectProductsListState(state).productsList
export const selectAddProductDialogState = (state: RootState) => state.herbsMe.addProductDialogState
export const selectEditProductDialogState = (state: RootState) => state.herbsMe.editProductDialogState
export const selectProductsListState = (state: RootState) => state.herbsMe.productsListState
export const selectProductsListAccessor = (state: RootState) => selectProductsListState(state).sortby
export const selectConfirmeDeleteDialogState = (state: RootState) => state.herbsMe.deleteConfirmationDialogState
