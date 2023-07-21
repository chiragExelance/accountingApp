import {combineReducers} from 'redux';

import dataReducer from './dataReducer';

const appReducer = combineReducers({
  user: dataReducer,
});

export default appReducer;
