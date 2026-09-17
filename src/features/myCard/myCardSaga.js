import { call, put, takeLatest } from 'redux-saga/effects'
import { getCharsRequest, getCharsSuccess } from './myCardSlice'
import { getChars } from './myCardApi'
import { toast } from 'react-toastify';


function* getCharsWorker(action) {
  try {
    const data = yield call(getChars, action.payload);
    yield put(getCharsSuccess(data));
  } catch (e) {
    if (e instanceof Response) {
       yield toast.error("Ошибка! " + e.status); 
    }
  }
}

// watcher saga
export function* watchFetchCharactersMyCard() {
  yield takeLatest(getCharsRequest, getCharsWorker);
}

export default watchFetchCharactersMyCard