import { RootState } from "src/store/store";

export const selectProducts = (state: RootState) => state.herbsMe.products
export const selectProductsList = (state: RootState) => selectProductsListState(state).productsList
export const selectProductDialogState = (state: RootState) => state.herbsMe.productDialogState
export const selectProductsListState = (state: RootState) => state.herbsMe.productsListState
export const selectProductsListAccessor = (state: RootState) => selectProductsListState(state).sortby
export const selectConfirmeDeleteDialogState = (state: RootState) => state.herbsMe.deleteConfirmationDialogState
