import { ActionsUnion, createAction } from '@martin_hotell/rex-tils';
import produce from 'immer';
import { Reducer } from 'redux';
import { IProduct, ProductAccessor } from '../types';
import { initialProductsList } from '../constants';
import { sortBy, filter } from 'lodash';

export const OPEN_PRODUCT_DIALOG = 'herbsMe/OPEN_PRODUCT_DIALOG';
export const CLOSE_PRODUCT_DIALOG = 'herbsMe/CLOSE_PRODUCT_DIALOG';
export const ADD_NEW_PRODUCT = 'herbsMe/ADD_NEW_PRODUCT';
export const UPDATE_PRODUCT = 'herbsMe/UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'herbsMe/DELETE_PRODUCT';
export const SORT_PRODUCTS_LIST = 'herbsMe/SORT_PRODUCTS_LIST';
export const SET_PRICE_RANGE = 'herbsMe/SET_PRICE_RANGE';
export const CLEAR_PRICE_RANGE = 'herbsMe/CLEAR_PRICE_RANGE';

export const herbsMeActions = {
  openProductDialog: (index?: number) => createAction(OPEN_PRODUCT_DIALOG, { index }),
  closeProductDialog: () => createAction(CLOSE_PRODUCT_DIALOG),
  addNewProduct: (product: IProduct) => createAction(ADD_NEW_PRODUCT, { product }),
  updateProduct: (product: IProduct, index: number) => createAction(UPDATE_PRODUCT, { product, index }),
  deleteProduct: (index: number) => createAction(DELETE_PRODUCT, { index }),
  sortProducts: (accessor: ProductAccessor) => createAction(SORT_PRODUCTS_LIST, { accessor }),
  setPriceRange: (priceRange: IPriceRange) => createAction(SET_PRICE_RANGE, { priceRange }),
  clearPriceRange: () => createAction(CLEAR_PRICE_RANGE),
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
  priceRange?: IPriceRange;
  productsList: IProduct[];
}

interface IProductDialogState {
  isOpen: boolean;
  currentIndex?: number;
  product?: IProduct;
  productsListState?: IProductsListState;
}
const defaultState: IHerbsMeState = {
  productDialogState: { isOpen: false, currentIndex: undefined, product: undefined },
  products: initialProductsList,
  productsListState: { sortby: ProductAccessor.name, productsList: initialProductsList },
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
          draft.productDialogState.currentIndex = action.payload.index;
          draft.productDialogState.product = draft.products[action.payload.index];
        }
        return;
      }
      case CLOSE_PRODUCT_DIALOG: {
        draft.productDialogState.isOpen = false;
        draft.productDialogState.product = undefined;
        return;
      }
      case ADD_NEW_PRODUCT: {
        const currentProducts = state.products;
        draft.products = [action.payload.product, ...currentProducts];
        return;
      }
      case UPDATE_PRODUCT: {
        draft.products[action.payload.index] = action.payload.product;
        return;
      }
      case SORT_PRODUCTS_LIST: {
        const { accessor } = action.payload;
        draft.productsListState.sortby = accessor;
        draft.productsListState.productsList = sortBy(draft.productsListState.productsList, [accessor]);
        return;
      }
      case SET_PRICE_RANGE: {
        const { minPrice, maxPrice } = action.payload.priceRange;
        draft.productsListState.priceRange = action.payload.priceRange;
        draft.productsListState.productsList = filter(
          draft.productsListState.productsList,
          (o) => o.price <= maxPrice && o.price >= minPrice
        );
        return;
      }
      case CLEAR_PRICE_RANGE: {
        draft.productsListState.priceRange = null;
        draft.productsListState.productsList = sortBy(draft.products, [draft.productsListState.sortby]);
        return;
      }
      default: {
        return state;
      }
    }
  });
