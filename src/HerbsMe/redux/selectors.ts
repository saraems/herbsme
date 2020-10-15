import { RootState } from "src/store/store";

export const selectProducts = (state: RootState) => state.herbsMe.products
export const selectProductDialogState = (state: RootState) => state.herbsMe.productDialogState