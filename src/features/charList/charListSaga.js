import { call, put, takeLatest, delay } from 'redux-saga/effects'
import { fetchCharsSuccess, fetchCharsRequest, fetchCharsError } from './charListSlice'
import { toast } from 'react-toastify';
import { getCharList } from './charListApi'

// worker saga
function* fetchCharsWorker(action) {
  try {
    const data = yield call(getCharList, action.payload);

    yield delay(500);
    yield put(fetchCharsSuccess(data));
  } catch (e) {
    if (e instanceof Response) {
       yield toast.error("Ошибка загрузки " + e.status, { autoClose: 8000 }); 
    }
    yield put(fetchCharsError());
  }
}

// watcher saga
export function* watchFetchCharacters() {
  yield takeLatest(fetchCharsRequest, fetchCharsWorker);
}


export default watchFetchCharacters