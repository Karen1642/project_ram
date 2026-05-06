import { call, put, takeLatest, delay } from 'redux-saga/effects'
import { fetchCharsSuccess, fetchCharsRequest } from './charListSlice'
import { getCharList } from './charListApi'


// worker saga
function* fetchCharsWorker(action) {
  try {
    console.log("saga action param:", action.payload);
    const data = yield call(getCharList, action.payload);
    console.log("data", data);
    yield delay(1000);
    yield put(fetchCharsSuccess(data));
  } catch (e) {
    console.log("error code:", e);
    if (e instanceof Response) {
       if (e.status === 404) console.log("No data found");
    }
    yield put(logError());
  }
}

// watcher saga
export function* watchFetchCharacters() {
  yield takeLatest(fetchCharsRequest, fetchCharsWorker);
}


export default watchFetchCharacters