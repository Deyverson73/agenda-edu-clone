import { all } from 'redux-saga/effects';
import { themeSagas } from './theme';

function* sagas() {
  yield all([themeSagas()]);
}

export { sagas };
