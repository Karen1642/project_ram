import { call, put, takeLatest, delay } from 'redux-saga/effects'
import { fetchCharsSuccess, fetchCharsRequest, fetchCharsError } from './charListSlice'
import { toast } from 'react-toastify';
import { getCharList } from './charListApi'

// worker saga
function* fetchCharsWorker(action) {
  try {
    console.log("saga action param:", action.payload);
    const data = yield call(getCharList, action.payload);
    console.log("data", data);

    yield delay(500);
    yield put(fetchCharsSuccess(data));
  } catch (e) {
    console.log("error code:", e);
    if (e instanceof Response) {
       yield toast.error("Ошибка! " + e.status); 
    }
    yield put(fetchCharsError());
  }
}

// watcher saga
export function* watchFetchCharacters() {
  yield takeLatest(fetchCharsRequest, fetchCharsWorker);
}


export default watchFetchCharacters