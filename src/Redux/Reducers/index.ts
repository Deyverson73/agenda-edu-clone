import { MainReducer, ITheme } from './MainReducers';

import { combineReducers } from 'redux';

const Reducers = combineReducers({ MainReducer });

declare module 'react-redux' {
  interface DefaultRootState {
    MainReducer: ITheme;
  }
}

export default Reducers;
