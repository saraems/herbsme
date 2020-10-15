import { ActionsUnion, createAction } from '@martin_hotell/rex-tils';
import produce from 'immer';
import { Reducer } from 'redux';
import { IProduct, ProductAccessor } from '../types';
import { initialProductsList } from '../constants';

export const OPEN_PRODUCT_DIALOG = 'herbsMe/OPEN_PRODUCT_DIALOG';
export const CLOSE_PRODUCT_DIALOG = 'herbsMe/CLOSE_PRODUCT_DIALOG';
export const ADD_NEW_PRODUCT = 'herbsMe/ADD_NEW_PRODUCT';
export const DELETE_PRODUCT = 'herbsMe/DELETE_PRODUCT';
export const SORT_PRODUCTS_LIST = 'herbsMe/SORT_PRODUCTS_LIST';
export const SET_PRICE_RANGE = 'herbsMe/SET_PRICE_RANGE';

export const herbsMeActions = {
  openProductDialog: (index?: number) => createAction(OPEN_PRODUCT_DIALOG, { index }),
  closeProductDialog: () => createAction(CLOSE_PRODUCT_DIALOG),
  addNewProduct: (product: IProduct) => createAction(ADD_NEW_PRODUCT, { product }),
  deleteProduct: (index: number) => createAction(DELETE_PRODUCT, { index }),
  sortProducts: (accessor: ProductAccessor) => createAction(SORT_PRODUCTS_LIST, { accessor }),
  setPriceRange: (priceRange: IPriceRange) => createAction(SET_PRICE_RANGE, { ...priceRange }),
};

export type HerbsMeAction = ActionsUnion<typeof herbsMeActions>;

interface IHerbsMeState {
  productDialogState: IProductDialogState;
  products: IProduct[];
  productsListState: IProductsListState;
}

interface IPriceRange {
  minPrice?: number;
  maxPrice?: number;
}
interface IProductsListState {
  sortby: ProductAccessor;
  priceRange: IPriceRange;
}

interface IProductDialogState {
  isOpen: boolean;
  product?: IProduct;
  productsListState?: IProductsListState;
}
const defaultState: IHerbsMeState = {
  productDialogState: { isOpen: false, product: undefined },
  products: initialProductsList,
  productsListState: { sortby: ProductAccessor.name, priceRange: { minPrice: undefined, maxPrice: undefined } },
};

export const herbsMeStateReducer: Reducer<typeof defaultState> = (
  state: IHerbsMeState = defaultState,
  action: HerbsMeAction
): IHerbsMeState =>
  produce(state, (draft) => {
    switch (action.type) {
      case OPEN_PRODUCT_DIALOG: {
        draft.productDialogState.isOpen = true;
        if (action.payload.index) {
          draft.productDialogState.product = state.products[action.payload.index];
        }
        return;
      }
      case CLOSE_PRODUCT_DIALOG: {
        draft.productDialogState.isOpen = false;
        draft.productDialogState.product = undefined;
        return;
      }
      default: {
        return state;
      }
    }
  });
