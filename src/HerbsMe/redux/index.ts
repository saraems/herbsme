import { ActionsUnion, createAction } from '@martin_hotell/rex-tils';
import produce from 'immer';


export const OPEN_DIALOG = 'HerbsMe/OPEN_DIALOG';

export const herbsMeActions = {
  openDialog: () => createAction(OPEN_DIALOG),
};

export type HerbsMeAction = ActionsUnion<typeof herbsMeActions>;


interface IHerbsMeState { 
  productDialogState: IProductDialogState;
}

interface IProductDialogState {
  isOpen: boolean;
}
const defaultState: IHerbsMeState = {
  productDialogState: {isOpen: false}
};

export const herbsMeStateReducer = (
  state: IHerbsMeState = defaultState,
  action: HerbsMeAction 
) =>  produce(state, (draft) => {
    switch (action.type) {
      case OPEN_DIALOG: {
        draft.productDialogState.isOpen = true;
        return;
      }
      default: {
        return state;
      }
    }
});