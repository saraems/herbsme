import { combineReducers } from 'redux';
import { herbsMeStateReducer } from '../HerbsMe/redux';

const createRootReducer = () =>
  combineReducers({
    herbsMe: herbsMeStateReducer,
  });

const rootReducer = createRootReducer();

export default rootReducer;
