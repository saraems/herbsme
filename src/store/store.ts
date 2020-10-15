import { createStore } from 'redux';
import rootReducer from './root-reducer';
import { StateType } from 'typesafe-actions';

export type RootState = StateType<typeof rootReducer>;

export const store = createStore(rootReducer, undefined);
