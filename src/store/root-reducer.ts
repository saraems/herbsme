import { combineReducers } from 'redux';
import { herbsMeStateReducer } from '../HerbsMe/redux';

const rootReducer = () =>
  combineReducers({
    herbsMe: herbsMeStateReducer,
  });

export default rootReducer;
