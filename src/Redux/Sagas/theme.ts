import { Action } from 'redux';
import { all, put, takeLatest } from 'redux-saga/effects';

interface TaskAction extends Action {
  type: string;
  theme: string;
}

function* changeTheme({ theme }) {
  yield put({ type: 'THEME.CHANGE', theme });
}

function* watchChangeTheme() {
  yield takeLatest<TaskAction>('SAGA.THEME.CHANGE', changeTheme);
}

function* themeSagas() {
  yield all([watchChangeTheme()]);
}

export { themeSagas };
