import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { fetchCharRequest, fetchCharSuccess } from './charCardSlice'
import { getChar } from './charCardApi'




function* fetchCharWorker(action) {
  try {
    console.log("saga action param:", action.payload);
    const data = yield call(getChar, action.payload);
    console.log("data", data);
    yield delay(1000);
    yield put(fetchCharSuccess(data));

  } catch (e) {
    console.log("error code:", e);
    if (e instanceof Response) {
       if (e.status === 404) console.log("No data found");
    }
    yield put(logError());
  }
}

// watcher saga
export function* watchFetchCharactersCharCard() {
  yield takeLatest(fetchCharRequest, fetchCharWorker);
}


export default watchFetchCharactersCharCard